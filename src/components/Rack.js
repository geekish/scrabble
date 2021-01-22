import Tile from './Tile';
import { useState } from 'react';

export default function Rack(props) {
    const [rack, setRack] = useState(props.rack);

    function shuffleRack() {
        const N = rack.length;
        const indices = [...Array(N).keys()];
        for (let i=N-1; i>=0; i--) {
            indices.push(indices.splice(0, Math.floor(i*Math.random()))[0]);
        }
        setRack(indices.map(ix=>rack[ix]));
    }

    function removePlayedTiles() {
        setRack(rack.filter(tile=>!props.tilesPlayed.find(tilePlayed=>tilePlayed.letter===tile.letter)));
    }

    function addDrawnTiles() {
        setRack(rack.concat(props.newTiles));
    }

    return (
        <div className='rackHolder'
            style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(7, 50px)",
            }}
        >
            {rack}
        </div>
    )
}