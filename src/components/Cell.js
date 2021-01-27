import { useState } from "react";

export default function Cell(props) {
    const [position, setPosition]=useState(0);
    const coords={x: parseInt(props.x), y: parseInt(props.y)}
    const [letter, setLetter] = useState(props.letter);
    const value = props.value;
    const [display, setDisplay] = useState(props.value)
    const [isClicked, setIsClicked]=useState(false);

    // function getDisplay() {
    //     if (isClicked) return value;
    //     else {
    //         if (letter) return letter;
    //         else return coords.x===7 && coords.y===7?"★":value;
    //     }
    // }

    function handleClick() {
        setIsClicked(true);
        setPosition((position + 1) % 3);
        setDisplay([value, "→", "↓"][position]);
    }

    function handleKeyDown() {
        setLetter(props.keyDownInfo);
    }

    return (<div onClick={handleClick}
            onKeyDown={handleKeyDown}
            data-x={coords.x}
            data-y={coords.y}
            style={{ backgroundColor: props.color,
                width: "40px",
                height: "40px", 
                textAlign: "center", 
                verticalAlign: "middle",
                lineHeight: "40px"}}
            >{display}</div>
    );
}