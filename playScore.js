export default function playScore(myWords) {
    let totalScore=0;
    for (const word of myWords) {
        let [score,multiplier]=[0,1];
        for (const letter of word) {
            const wordMultiplier=bonusWord(letter[1]);
            const letterVal=letterData[letter[0]].val;
            const letterMultiplier=bonusLetter(letter[1]);
            multiplier*=wordMultiplier;
            score+=letterVal*letterMultiplier;
        }
        totalScore+=score*multiplier;
    }
    return totalScore;
}