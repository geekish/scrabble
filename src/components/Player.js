import { useState } from 'react';

export default function Player(props) {
    const name = props.name;
    const [score, setScore] = useState(0);
    const [rack, setRack] = useState(props.letters);

    return (
        <div>
            <h2>{name} - {score}</h2>
            <div className='tileHolder'>{rack}</div>
        </div>
    )
}