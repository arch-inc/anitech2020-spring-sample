import { FC } from "react";
import Layer from "../layers/Layer";
import LayerItem from "./LayerItem";

interface Props {
  activeLayer: Layer;
  layers: Layer[];
  onAddLayer?: () => void;
  onSelectActiveLayer?: (index: number) => void;
  onMoveUpLayer?: (index: number) => void;
  onMoveDownLayer?: (index: number) => void;
}

const Layers: FC<Props> = ({
  activeLayer,
  layers,
  onAddLayer,
  onSelectActiveLayer,
  onMoveUpLayer,
  onMoveDownLayer
}) => {
  const layerItems = layers.map((l, i) => {
    return (
      <LayerItem
        key={l.group.name}
        active={activeLayer == l}
        name={l.group.name}
        color={l.color}
        onSelectLayer={() => onSelectActiveLayer?.(i)}
        onMoveUpLayer={() => {
          onMoveUpLayer?.(i);
        }}
        onMoveDownLayer={() => {
          onMoveDownLayer?.(i);
        }}
      />
    );
  });
  return (
    <>
      <button className="ui fluid primary button" onClick={onAddLayer}>
        <i className="plus icon" />
      </button>
      <div className="ui middle aligned divided list">
        {layerItems.reverse()}
      </div>
    </>
  );
};
export default Layers;
