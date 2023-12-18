import { useState } from 'react';
import Rack from './Rack';

export default function Player(props) {
    const [name] = props.player["name"];
    const [score, setScore] = useState(props.player["score"]);
    const [rack, setRack] = useState(props.player["rack"]);
    const [isVisible, setIsVisible] = useState(props.isVisible);

    return (
        <div>
            <h2>{name} - {score}</h2>
            <Rack rack={rack} isVisible={isVisible} />
        </div>
    )
}