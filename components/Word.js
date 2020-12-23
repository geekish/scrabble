import letterData from './letterData';

export default class Word {
    constructor(word) {
        this.word=word;
    }

    wordSorted() {
        return this.word.split('').sort((a,b)=>a>b?1:-1);
    }

    wordValue() {
        return this.wordSorted().reduce((sum, curr)=>sum+letterData[curr].val, 0);
    }

}