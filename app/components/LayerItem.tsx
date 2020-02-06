import {FC} from "react";

interface Props {
    active: boolean;
    name: string;
    color: string;
    onMoveUpLayer?: () => void;
    onMoveDownLayer?: () => void;
    onSelectLayer?: () => void;
}
const LayerItem: FC<Props> = ({ active,
                                name,
                                color,
                                onMoveDownLayer,
                                onMoveUpLayer ,
                                onSelectLayer}) => {
    return (
        <>
            <style jsx>{`
                div {
                    padding: 16px 8px;
                }
                
                div.active {
                    box-sizing: border-box;
                    border: solid 4px hsl(280, 20%, 80%);
                }
                
                span.penColor {
                    content: '■';
                    color: ${color};
                }
            `}</style>
            <div className={active ? "active" : ""} onClick={onSelectLayer}>
                {name}
                <button onClick={e => {
                    e.stopPropagation();
                    onMoveDownLayer()
                }}> ↓ </button>
                <button onClick={e => {
                    e.stopPropagation();
                    onMoveUpLayer();
                }}> ↑ </button>
                <span className={"penColor"}>■</span>
            </div>
        </>
    );
};

export default LayerItem;