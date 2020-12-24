import scrabbleWords from './scrabbleWords';

function getDictObj() {
    const dictObj = {};
    for (const word of scrabbleWords) {
        const sortedWord=word.split('').sort((a,b)=>a>b?1:-1).join('');
        if (dictObj[sortedWord]) dictObj[sortedWord].push(word);
        else dictObj[sortedWord] = [word];
    }
    return dictObj;
}

export default getDictObj;