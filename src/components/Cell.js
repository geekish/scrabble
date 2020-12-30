import { useEffect, useState } from 'react';

export default function Cell(props) {
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);
    const [display, setDisplay] = useState(getDisplay());
    const [isClicked, setIsClicked] = useState(false);

    function getDisplay() {
        if (letter) return letter;
        else return props.coords==="8H"?"★":value;
    }

    function handleClick() {
        setIsClicked(!isClicked);
        setDisplay(isClicked ? "→" : getDisplay());
    }

    return (<div onClick={handleClick}
            key={props.key}
            coords={props.coords}
            style={{ backgroundColor: props.color,
                width: '40px',
                height: '40px', 
                textAlign: 'center', 
                verticalAlign: 'middle' }}
            >{display}</div>
    );
}