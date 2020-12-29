export default function wordGetter(board, coords) {
    const vert=coords[0][2]===coords[1][2];
    const wordList=[];
    for (const coord of coords) {
        const [letter, x, y] = coord;
        const word=[{'letter': letter, 'bonus': board[x][y].bonus}];
        if (board[x][y].letter===" ") board[x][y].letter=letter;
        if (vert) {
            let [start,end]=[y-1,y+1];
            while(start>=0 && board[x][start].letter!==" ") {
                word.unshift(board[x][start]);
                start--;
            }
            while(end<=14 && board[x][end].letter!==" ") {
                word.push(board[x][end]);
                end++;
            }
        }
        else {
            let [start,end]=[x-1,x+1];
            while(start>=0 && board[start][y].letter!==" ") {
                word.unshift(board[start][y]);
                start--;
            }
            while(end<=14 && board[end][y].letter!==" ") {
                word.push(board[end][y]);
                end++;
            }
        }
        if (word.length>1) wordList.push(word);
    }
    const mainWord=[];
    const [first, last]=[coords[0], coords[coords.length-1]];
    let [start, end]=vert?[first[1]-1,last[1]+1]:[first[2]-1,last[2]+1];
    if (vert) {
        while(start>=0 && board[start][first[2]].letter!==" ") start--;
        while(end<=14 && board[end][first[2]].letter!==" ") end++;
        for (let i=start+1;i<=end-1;i++) mainWord.push(board[i][first[2]]);
    }
    else {
        while(start>=0 && board[first[2]][start].letter!==" ") start--;
        while(end<=14 && board[first[2]][end].letter!==" ") end++;
        for (let i=start+1;i<=end-1;i++) mainWord.push(board[first[1]][i]);
    }
    wordList.push(mainWord);
    return wordList;
}