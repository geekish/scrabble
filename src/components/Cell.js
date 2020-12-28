import { useState } from 'react';

export default function Cell(props) {
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);

    return (<div key={props.key} style={{ backgroundColor: props.color, width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'middle' }}>{letter || value}</div>);
}