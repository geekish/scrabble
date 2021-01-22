import { useState } from 'react';
import Rack from './Rack';

export default function Player(props) {
    const name = props.name;
    const [score, setScore] = useState(0);
    const [rack, setRack] = useState(props.rack);

    return (
        <div>
            <h2>{name} - {score}</h2>
            <Rack rack={rack} />
        </div>
    )
}