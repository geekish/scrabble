import Tile from '../components/Tile';

const letterData = {
    '?': {
        'frequency': 2,
        'value': 0
    },
    'A': {
        'frequency': 9,
        'value': 1
    },
    'B': {
        'frequency': 2,
        'value': 3
    },
    'C': {
        'frequency': 2,
        'value': 3
    },
    'D': {
        'frequency': 4,
        'value': 2
    },
    'E': {
        'frequency': 12,
        'value': 1
    },
    'F': {
        'frequency': 2,
        'value': 4
    },
    'G': {
        'frequency': 3,
        'value': 2
    },
    'H': {
        'frequency': 2,
        'value': 4
    },
    'I': {
        'frequency': 9,
        'value': 1
    },
    'J': {
        'frequency': 1,
        'value': 8
    },
    'K': {
        'frequency': 1,
        'value': 5
    },
    'L': {
        'frequency': 4,
        'value': 1
    },
    'M': {
        'frequency': 2,
        'value': 3
    },
    'N': {
        'frequency': 6,
        'value': 1
    },
    'O': {
        'frequency': 8,
        'value': 1
    },
    'P': {
        'frequency': 2,
        'value': 3
    },
    'Q': {
        'frequency': 1,
        'value': 10
    },
    'R': {
        'frequency': 6,
        'value': 1
    },
    'S': {
        'frequency': 4,
        'value': 1
    },
    'T': {
        'frequency': 6,
        'value': 1
    },
    'U': {
        'frequency': 4,
        'value': 1
    },
    'V': {
        'frequency': 2,
        'value': 1
    },
    'W': {
        'frequency': 2,
        'value': 1
    },
    'X': {
        'frequency': 1,
        'value': 8
    },
    'Y': {
        'frequency': 2,
        'value': 4
    },
    'Z': {
        'frequency': 1,
        'value': 10
    },
}

export default function createBag() {
    const keyString=Object.keys(letterData).reduce((prev, curr)=>prev+=curr.repeat(letterData[curr].frequency), "");
    const bag = keyString.map(key=>Tile({letter: key, value: letterData.value}))
    for (let i=bag.length-1; i>=0; i--) bag.push(bag.splice(Math.floor(Math.random()*i),1)[0]);
    return bag;
}