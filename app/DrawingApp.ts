import { fabric } from "fabric"
import Layer from "./layers/Layer";
import {LayerEvents, Layers} from "./layers/Layers";

interface DrawingEvents {
    onAddObject?: (obj: fabric.Object) => void
    onChangeActiveLayer?: (layer: Layer) => void
}

export type DrawingAppEvents = (DrawingEvents & LayerEvents);

export class DrawingApp {
    private canvas: fabric.Canvas;
    private listeners: DrawingEvents[] = [];
    private layers: Layers;
    public activeLayer: Layer;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = new fabric.Canvas(canvas, { isDrawingMode: true });
        this.canvas.freeDrawingBrush.width = 5;
        this.canvas.freeDrawingBrush.color = '#6cb';
        this.registerFabricEvents(this.canvas);

        this.layers = new Layers(this.canvas);
        this.addLayer();
        this.selectActiveLayer(0);
    }

    dispose() {
        this.canvas.dispose();
    }

    getAllLayers(): Layer[] {
        return this.layers.getAll();
    }

    addLayer(): Layer {
        return this.layers.addLayer(`Layer ${this.layers.length}`);
    }

    moveUpLayer(target: number) {
        this.layers.moveUpLayer(target);
        this.canvas.requestRenderAll();
    }

    moveDownLayer(target: number) {
        this.layers.moveDownLayer(target);
        this.canvas.requestRenderAll();
    }

    selectActiveLayer(i: number) {
        this.activeLayer = this.layers.get(i);
        this.canvas.freeDrawingBrush.color = this.activeLayer.color;
        for(const l of this.listeners) {
            l.onChangeActiveLayer?.(this.activeLayer)
        }
    }

    registerEvents(listener: DrawingAppEvents) {
        this.listeners.push(listener);
        this.layers.registerEvents(listener);
    }

    private registerFabricEvents(canvas: fabric.Canvas) {
        canvas.on("object:added", (e) => {
            if(e.target.type == "layerGroup") {
                return;
            }

            canvas.remove(e.target);
            this.activeLayer.add(e.target);
            this.listeners.forEach((l) => {
                l.onAddObject?.(e.target);
            })
        });
    }
}
