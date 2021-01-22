import createBag from '../helpers/createBag';
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

    return <div></div>;

}