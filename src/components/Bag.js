import { useState } from 'react';

export default function Bag(props) {
    const [bagTiles, setBagTiles] = useState(props.bag);

    function dealTiles(numberOfTiles, playerId) {
        const tilesDealtObj = {
            playerId,
            tiles: []
        };
        for (let i=0; i<numberOfTiles; i++) {
            tilesDealtObj.tiles.push(bagTiles.pop());
        }
        return tilesDealtObj;
    }

    return (
        <div>
            <h2>Tiles Remaining: {bagTiles.length}</h2>
            <div style={{
                "display": 'grid',
                "gridTemplateColumns": "repeat(10, 60px)",
                "gridTemplateRows": "repeat(10, 60px)",
                // "rowGap": "2px",
                // "columnGap": "2px",
            }}>{bagTiles}</div>
        </div>
    );

}