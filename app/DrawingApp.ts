import { fabric } from "fabric"

class DrawingApp {
    private canvas: fabric.Canvas;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = new fabric.Canvas(canvas, { isDrawingMode: true });
        console.log(this.canvas);
        this.canvas.freeDrawingBrush.width = 5;
        this.canvas.freeDrawingBrush.color = '#6cb';

        this.registerEvents(this.canvas);
    }

    registerEvents(canvas: fabric.Canvas) {
        canvas.on("object:added", (e) => {
            console.log("Object added: ", e.target);
        });
    }
}

export default DrawingApp
