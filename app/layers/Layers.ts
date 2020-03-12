import Layer from "./Layer";

export interface LayerEvents {
  onLayerAdd?: (layer: Layer, layers: Layers) => void;
  onLayerMove?: (layers: Layers) => void;
}

// this class manage only layers
export class Layers {
  private canvas: fabric.Canvas;
  private layers: Layer[];
  private listener: LayerEvents[];

  constructor(canvas: fabric.Canvas) {
    this.layers = [];
    this.listener = [];
    this.canvas = canvas;
  }

  addLayer(name: string): Layer {
    const newLayer = new Layer(name);
    this.layers.push(newLayer);
    newLayer.group.name = name;
    this.canvas.add(newLayer.group);

    for (const l of this.listener) {
      l.onLayerAdd && l.onLayerAdd(newLayer, this);
    }
    return newLayer;
  }

  get(i: number): Layer {
    return this.layers[i];
  }

  getAll(): Layer[] {
    return this.layers;
  }

  moveUpLayer(target: number) {
    if (target >= this.length - 1 || target < 0) {
      return;
    }

    this.canvas.moveTo(this.layers[target].group, target + 1);
    [this.layers[target + 1], this.layers[target]] = [
      this.layers[target],
      this.layers[target + 1]
    ];
    for (const l of this.listener) {
      l.onLayerMove?.(this);
    }
  }

  moveDownLayer(target: number) {
    if (target < 1 || target >= this.length) {
      return;
    }

    this.canvas.moveTo(this.layers[target].group, target - 1);
    [this.layers[target - 1], this.layers[target]] = [
      this.layers[target],
      this.layers[target - 1]
    ];
    for (const l of this.listener) {
      l.onLayerMove?.(this);
    }
  }

  get length(): number {
    return this.layers.length;
  }

  registerEvents(o: LayerEvents) {
    this.listener.push(o);
  }
}
