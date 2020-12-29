import playScore from './playScore';
import wordGetter from './wordGetter';

export default function makePlay(board, coords) {
    const words=wordGetter(board, coords);
    const score=playScore(words, coords.length===7);
    for (const coord of coords) board[coord[1]][coord[2]].bonus=0;
    return score;
}