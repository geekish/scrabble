import { useState } from "react";

export default function Tile(props) {
    const letter = props.letter;
    const value = props.value;
    const [isVisible, setIsVisible] = useState(true);

    function toggleVisible() {
        setIsVisible(!isVisible);
    }

    function divver(str="", size=0) {
        return <div style={{
            "fontWeight": "bold",
            "fontSize": `${size}px`,
            "textAlign": "center",
            "padding": "2px 2px",
        }}>{str}</div>
    }

    return (
        <div style={{
            "borderColor": "black",
            "display": "grid",
            // "gridTemplateColumns": "40px 10px",
            // "gridTemplateRows": "40px 10px",
            "backgroundColor": "tan",
            "width": "50px",
            "height": "50px",
        }}>
            {isVisible ? divver(letter, 30) :
            null}
        </div>
    )

}