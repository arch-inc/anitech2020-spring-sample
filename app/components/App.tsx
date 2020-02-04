import {FC, useEffect, useRef, useState} from 'react';
import DrawingApp from "../DrawingApp";

const App: FC = function() {
    const canvas = useRef();
    const [_, setApp] = useState<DrawingApp>();
    useEffect(() => {
        setApp(new DrawingApp(canvas.current))
    }, [canvas]);

    return (
        <>
            <style jsx>{`
                div {
                    border: 10px solid #cc66bb;
                    box-sizing: border-box;
                    width: 800px;
                    height: 800px;
                }
                
            `}</style>
            <div>
                <canvas ref={canvas} width={800} height={800}/>
            </div>
        </>
    )
};

export default App