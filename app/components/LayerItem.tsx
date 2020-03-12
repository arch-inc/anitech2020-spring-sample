import { FC } from "react";

interface Props {
  active: boolean;
  name: string;
  color: string;
  onMoveUpLayer?: () => void;
  onMoveDownLayer?: () => void;
  onSelectLayer?: () => void;
}
const LayerItem: FC<Props> = ({
  active,
  name,
  color,
  onMoveDownLayer,
  onMoveUpLayer,
  onSelectLayer
}) => {
  return (
    <>
      <style jsx>{`
        .item {
          border: 3px solid #fff !important;
          background: #fff;
          padding: 0.5em !important;
        }
        .active.item {
          border: 3px solid #c00 !important;
        }
        span.pen {
          border-bottom: 5px solid ${color};
        }
      `}</style>
      <div className={active ? "active item" : "item"} onClick={onSelectLayer}>
        <div className="right floated content">
          <button
            className="ui circular icon button"
            onClick={e => {
              e.stopPropagation();
              onMoveDownLayer();
            }}
          >
            <i className="arrow down icon" />
          </button>
          <button
            className="ui circular icon button"
            onClick={e => {
              e.stopPropagation();
              onMoveUpLayer();
            }}
          >
            <i className="arrow up icon" />
          </button>
        </div>
        <div className="content">
          <span className={"pen"}>{name}</span>
        </div>
      </div>
    </>
  );
};

export default LayerItem;
