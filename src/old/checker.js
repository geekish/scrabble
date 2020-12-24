import scrabbleWords from './scrabbleWords';
import counter from './counter';

function checker(letters) {
    letters = counter(letters);
    matches = scrabbleWords.filter(word=>!Object.keys(letters).find(key=>letters[key]>(counter(word)[key]||0)));
    return matches;
}

export default checker;