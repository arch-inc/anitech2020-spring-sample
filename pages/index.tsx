import App from "../app/components/App";
import {useState} from "react";

export default function Index() {
    return ( <div>
        <h1>Sample App for Anitech2020Spring</h1>
        <App
            width={800}
            height={800}
        />
    </div> )
}