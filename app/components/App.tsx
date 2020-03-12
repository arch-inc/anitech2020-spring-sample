import { FC, useEffect, useRef, useState, useMemo } from "react";
import { DrawingApp } from "../DrawingApp";
import Layers from "./Layers";
import Layer from "../layers/Layer";

const App: FC<{ width: number; height: number }> = function({ width, height }) {
  const [app, setApp] = useState<DrawingApp>(null);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [activeLayer, setActiveLayer] = useState<Layer>(null);

  // create a canvas element
  const ref = useRef<HTMLCanvasElement>();
  const canvas = useMemo(
    () => <canvas ref={ref} width={width} height={height} />,
    [width, height]
  );

  // connect canvas dom and DrawingApp
  useEffect(() => {
    const a = new DrawingApp(ref.current);

    a.registerEvents({
      onLayerAdd: (_, layers) => {
        setLayers(layers.getAll().slice());
      },
      onChangeActiveLayer: l => {
        setActiveLayer(l);
      },
      onLayerMove: layers => {
        setLayers(layers.getAll().slice());
      }
    });

    setApp(a);
    setLayers(a.getAllLayers().slice());
    setActiveLayer(a.activeLayer);

    return () => {
      a.dispose();
      setApp(null);
    };
  }, [ref.current]);

  return (
    <div className="main content">
      <style jsx>{`
        div.main.content {
          background: #fff;
          padding: 2em 0 0 0;
        }
        div.app {
          background: #f5f5f5;
          margin: 2em 0 0 0;
          display: flex;
        }
        div.canvas {
          flex-grow: 1;
          padding: 1em 0 1em 1em;
          text-align: center;
          overflow-x: auto;
        }
        div.canvas :global(.canvas-container) {
          margin: auto;
          border: 1px solid #eee;
          background: #fff;
        }
        div.info {
          flex-grow: 0.5;
          min-width: 200px;
          max-width: 320px;
          padding: 1em;
        }
      `}</style>
      <div className="ui container">
        <p>
          This project shows an example implementation of a layer system in
          Fabric.js utilizing <code>fabric.Group</code>.
        </p>
        <p>
          Please visit{" "}
          <a href="https://github.com/arch-inc/anitech2020-spring-sample">
            the repository
          </a>{" "}
          to read the source code.
        </p>
      </div>
      <div className="app">
        <div className="canvas">{canvas}</div>
        <div className="info">
          <Layers
            activeLayer={activeLayer}
            layers={layers}
            onAddLayer={app?.addLayer.bind(app)}
            onSelectActiveLayer={i => app?.selectActiveLayer(i)}
            onMoveUpLayer={i => app?.moveUpLayer(i)}
            onMoveDownLayer={i => app?.moveDownLayer(i)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
