import { useState } from 'react';
import Cell from './Cell';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);
    const [currCell, setCurrCell] = useState({x: 7, y: 7, isRight: true});

    function handleClick(e) {
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
        board[x][y].value=board[x][y].isRight ? "→" : "↓";
        if (x===currCell.x && y===currCell.y) {
            setCurrCell({
                ...currCell,
                isRight: !currCell.isRight
            })
        }
        else {
            setCurrCell({
                ...currCell,
                x: x,
                y: y
            })
        }
        console.log(currCell);
    }

    function handleKeyDown(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift'){
                console.log(e.key);
                board[currCell.x][currCell.y].letter = e.key;
                setCurrCell({
                    ...currCell,
                    x: currCell.isRight? currCell.x+1 : currCell.x,
                    y: currCell.isRight? currCell.y: currCell.y+1
                })
            }
        }
        else {
            if (e.key==='Backspace') {
                console.log(e.key);
                setCurrCell({
                    ...currCell,
                    x: currCell.isRight? currCell.x-1 : currCell.x,
                    y: currCell.isRight? currCell.y: currCell.y-1
                })
            }
        }
    }
    
    return (
        <div>
            <table onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0}>
                <tbody>
                    {board.map(row=>
                        <tr>
                            {row.map(col=><td>{
                                <Cell onKeyDown={handleKeyDown} 
                                    x={col.x} 
                                    y={col.y} 
                                    color={col.color} 
                                    letter={col.letter} 
                                    value={col.value} />}
                                </td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}