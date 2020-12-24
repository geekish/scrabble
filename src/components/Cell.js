import {useState, useEffect} from 'react';

export default function Cell(props) {
    const [letter, setLetter] = useState('');
    const [value, setValue] = useState(0);

    useEffect(()=>{setValue(props.value)}, [props.value])

    return (<div style={{ backgroundColor: props.color, width: '40px', height: '40px', textAlign: 'center', verticalAlign: 'middle' }}>{letter || value}</div>);
}