import letterData from './letterData';

export default class Word {
    constructor(word) {
        this.word=word;
        this.wordArray=word.split('');
        this.value=this.wordValue();
    }

    wordValue() {
        return this.wordArray.reduce((sum, curr)=>sum+letterData[curr].val, 0);
    }

}