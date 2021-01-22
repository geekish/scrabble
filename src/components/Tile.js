import { useState } from 'react';
import letterData from '../helpers/letterData';

export default function Tile(props) {
    const [letter, setLetter] = useState(props.letter);
    const [value, setValue] = useState(props.value);

    return (
        <div 
            style={{
            backgroundColor: 'lightbrown',
            width: '40px',
            height: '40px'
        }}>
            {letter}
            {value}
        </div>
    )

}