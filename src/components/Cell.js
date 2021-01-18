import { useState } from 'react';

export default function Cell(props) {
    const [isRight, setIsRight]=useState(true);
    const coords={x: parseInt(props.x), y: parseInt(props.y)}
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);
    const [isClicked, setIsClicked]=useState(false);
    const [display, setDisplay] = useState(getDisplay());

    function getDisplay() {
        if (isClicked) return value;
        else {
            if (letter) return letter;
            else return coords.x===7 && coords.y===7?"★":value;
        }
    }

    function handleClick() {
        setIsClicked(true);
        setIsRight(!isRight);
        setValue(isRight ? "→" : "↓");
        setDisplay(getDisplay());
    }

    function handleKeyDown() {
        setLetter(props.keyDownInfo);
        setDisplay(getDisplay());
    }

    return (<div onClick={handleClick}
            onKeyDown={handleKeyDown}
            data-x={coords.x}
            data-y={coords.y}
            style={{ backgroundColor: props.color,
                width: '40px',
                height: '40px', 
                textAlign: 'center', 
                verticalAlign: 'middle' }}
            >{display}</div>
    );
}