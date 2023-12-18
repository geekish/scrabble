import { useState } from "react";

export default function Cell(props) {
    const [position, setPosition]=useState(0);
    const coords={x: parseInt(props.x), y: parseInt(props.y)}
    const [letter, setLetter] = useState(props.letter);
    const value = props.value;
    const [display, setDisplay] = useState(props.value)
    const [isClicked, setIsClicked]=useState(false);

    function handleClick() {
        setIsClicked(true);
        setPosition((position + 1) % 3);
        setDisplay([value, "→", "↓"][position]);
    }

    function handleKeyDown(e) {
        console.log(e);
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