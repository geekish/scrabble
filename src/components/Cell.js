import { useEffect, useState } from 'react';

export default function Cell(props) {
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);
    const [display, setDisplay] = useState(getDisplay());

    function getDisplay() {
        if (letter) return letter;
        else return props.coords==="8H"?"★":value;
    }

    function handleChange() {
        setDisplay(getDisplay());
    }

    return (<div onChange={handleChange}
            key={props.key}
            coords={{x: props.x, y: props.y}}
            style={{ backgroundColor: props.color,
                width: '40px',
                height: '40px', 
                textAlign: 'center', 
                verticalAlign: 'middle' }}
            >{display}</div>
    );
}