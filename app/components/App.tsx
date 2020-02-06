import {FC, useEffect, useRef, useState} from 'react';
import { DrawingApp } from "../DrawingApp";
import Layers from "./Layers";
import Layer from "../layers/Layer";

const App: FC<{width: number, height: number}> = function({width, height}) {
    const canvas = useRef();
    const [app, setApp] = useState<DrawingApp>(null);
    const [layers, setLayers] = useState<Layer[]>([]);
    const [activeLayer, setActiveLayer] = useState<Layer>(null);

    // connect canvas dom and DrawingApp
    useEffect(() => {
        setApp(new DrawingApp(canvas.current));
        return () => {
            app.dispose();
            setApp(null);
        }
    }, [canvas]);

    // connect state inside of DrawingApp and react component
    useEffect(() => {
        if(!app) return;

        app.registerEvents({
            onLayerAdd: (_, layers) => {
                setLayers(layers.getAll().slice());
            },
            onChangeActiveLayer: (l) => {
                setActiveLayer(l);
            },
            onLayerMove: (layers) => {
                setLayers(layers.getAll().slice());
            }
        });

        setLayers(app.getAllLayers().slice());
        setActiveLayer(app.activeLayer);
    }, [app]);

    return (
        <>
            <style jsx>{`
                div.flex-container {
                    display: flex;
                }
                div.canvas {
                    border: 10px solid #cc66bb;
                    width: ${width}px;
                    height: ${height}px;
                }
            `}</style>
            <div className={"app flex-container"}>
                <div className={"canvas"}>
                    <canvas ref={canvas} width={height} height={width}/>
                </div>
                <div className={"info"}>
                    <Layers
                        activeLayer={activeLayer}
                        layers={layers}
                        onAddLayer={app?.addLayer.bind(app)}
                        onSelectActiveLayer={(i) => app?.selectActiveLayer(i)}
                        onMoveUpLayer={(i) => app?.moveUpLayer(i)}
                        onMoveDownLayer={(i) => app?.moveDownLayer(i)}
                    />
                </div>
            </div>
        </>
    )
};

export default App