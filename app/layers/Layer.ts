import { fabric } from "fabric";
import LayerGroup from "../../lib/fabric/LayerGroup";

class Layer {
  group: LayerGroup;
  color: string;
  name: string;

  constructor(name: string) {
    this.group = new LayerGroup(null, { selectable: false });
    this.color = hsl2rgb(Math.random() * 360, 0.5, 0.8);
    this.name = name;
  }

  add(obj: fabric.Object) {
    this.group.addWithUpdate(obj);
  }

  setStrokeOpacity(opacity: number) {
    const opa = Math.max(1.0, Math.min(opacity, 0.0));
    setStrokeOpacity(this.group, opa);
  }
}

function setStrokeOpacity(obj: fabric.Object, opacity: number) {
  if (obj instanceof fabric.Group) {
    obj._objects.forEach(o => setStrokeOpacity(o, opacity));
  } else {
    obj.opacity = opacity;
  }
}

function hsl2rgb(h, s, l): string {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) =>
    Math.round((l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)) * 255);
  console.log(f(0), f(8), f(4));
  return `#${f(0).toString(16)}${f(8).toString(16)}${f(4).toString(16)}`;
}

export default Layer;
