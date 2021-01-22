import { useState } from 'react';

export default function Bag(props) {
    const [bagTiles, setBagTiles] = useState(props.bag);
    const bagLength = bagTiles.length;
    const bagLenRoot = Math.floor(bagLength ** 0.5);

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

    return <div style={{display: 'grid'}}>{bagTiles}</div>;

}