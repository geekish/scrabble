import { useState } from 'react';
import Cell from './Cell';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);
    const [currCell, setCurrCell] = useState({x: null, y: null, isRight: true});

    function handleClick(e) {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        console.log(e.target, x, y);
        if (x===currCell.x && y===currCell.y) {
            setCurrCell({
                ...currCell,
                x: x,
                y: y
            })
            console.log(currCell);
        }
        else {
            setCurrCell({
                ...currCell,
                isRight: !currCell.isRight
            })
        }
    }

    function handleKeyDown(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift'){
                board[currCell.x][currCell.y] = e.key;
                setCurrCell({
                    ...currCell,
                    x: currCell.isRight? currCell.x+1 : currCell.x,
                    y: currCell.isRight? currCell.y: currCell.y+1
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