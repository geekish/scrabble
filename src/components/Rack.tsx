import { useState } from 'react';
import Tile from './Tile';

export default function Rack(props) {
    const isVisible = props.isVisible;
    const [rack, setRack] = useState(props.rack);

    function shuffleRack() {
        const N = rack.length;
        const indices = [...Array(N).keys()];
        for (let i=N; i>0; i--) {
            indices.push(indices.splice(Math.floor(i*Math.random()), 1)[0]);
        }
        setRack(indices.map(ix=>rack[ix]));
    }

    function alphabetizeRack() {
        const rackCopy=JSON.parse(JSON.stringify(rack));
        rackCopy.sort((a,b)=>a.letter>b.letter?1:-1)
        setRack(rackCopy);
    }

    function removePlayedTiles() {
        setRack(rack.filter(tile=>!props.tilesPlayed.find(tilePlayed=>tilePlayed.letter===tile.letter)));
    }

    function addDrawnTiles() {
        setRack(rack.concat(props.newTiles));
    }

    return (
            <div>
            <div className='rackHolder'
                style={{
                    "display": "grid",
                    "gridTemplateColumns": "repeat(7, 60px)",
                }}
            >
                {rack.map(tile=><Tile letter={tile.letter} value={tile.value} isVisible={isVisible} />)}
            </div>
            <div className='buttonHolder' style={{'display': isVisible ? 'block' : 'none'}}>
                <button onClick={shuffleRack}>Shuffle Rack</button>
                <button onClick={alphabetizeRack}>Alphabetize Rack</button>
            </div>
        </div>
    )
}