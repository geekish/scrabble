function wordGetter(board, coords, vert=false) {
    const wordList=[];
    for (const coord of coords) {
        const [letter, x, y] = coord;
        if (board[x][y].letter===" ") board[x][y].letter=letter;
        const word=[{'letter': letter, 'bonus': board[x][y].bonus}];
        console.log(word);
        if (vert) {
            let [start,end]=[y-1,y+1];
            console.log(start, end);
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
            console.log(start, end);
            while(start>=0 && board[start][y].letter!==" ") {
                word.unshift(board[start][y]);
                start--;
            }
            while(end<=14 && board[end][y].letter!==" ") {
                word.push(board[end][y]);
                end++;
            }
        }
        console.log(word);
        if (word.length>1) wordList.push(word);
    }
    const [first, last]=[coords[0], coords[coords.length-1]];
    if (vert) {
        let [start, end]=[first[1],last[1]];
        while(start>=0 && board[start][first[2]].letter!==" ") start--;
        while(end<=14 && board[end][first[2]].letter!==" ") end++;
        wordList.push([...Array(end-start+1).keys()].map(ix=>board[ix+start][first[2]]));
    }
    else {
        let [start, end]=[first[2],last[2]];
        while(start>=0 && board[first[2]][start].letter!==" ") start--;
        while(end<=14 && board[first[2]][end].letter!==" ") end++;
        wordList.push([...Array(end-start+1).keys()].map(ix=>board[first[1]][ix+start]));
    }
    return wordList;
}