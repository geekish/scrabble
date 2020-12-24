import letterData from './letterData';
import Tile from '../components/Tile';

export default function createBag() {
    const keyString=Object.keys(letterData).reduce((prev, curr)=>prev+=curr.repeat(letterData[curr].frequency), "");
    const bag = keyString.map(key=>Tile({letter: key, value: letterData.value}))
    for (let i=bag.length-1; i>=0; i--) bag.push(bag.splice(Math.floor(Math.random()*i),1)[0]);
    return bag;
}