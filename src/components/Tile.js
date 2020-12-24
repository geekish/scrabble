import { useEffect, useState } from 'react';
import letterData from '../letterData';

export default function Tile(props) {
    const [letter, setLetter] = useState(null);
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setLetter(props.letter);
        setValue(props.value);
    })

    return (
        <div style={{
            backgroundColor: 'lightbrown',
            width: '40px',
            height: '40px'
        }}>
            {{letter} ({value})}
        </div>
    )

}