import { useState } from 'react';
import Cell from './Cell';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);
    const [currCell, setCurrCell] = useState({x: null, y: null, isRight: true});

    function handleClick(e) {
        const x = e.target.getAttribute('x');
        const y = e.target.getAttribute('y');
        if (x===currCell.x && y===currCell.y) {
            setCurrCell(prev=>{
                return {
                    ...prev,
                    x: x,
                    y: y
                }
            })
        }
        else {
            setCurrCell(prev=>{
                return {
                    ...prev,
                    isRight: !prev.isRight
                }
            })
        }
    }

    function handleKeyDown(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift'){
                board[currCell.x][currCell.y] = e.key;
                setCurrCell(prev=>{
                    return {
                        ...prev,
                        x: prev.isRight? x+1 : x,
                        y: prev.isRight? y: y+1
                    }
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
                            {row.map(col=><td>{<Cell onKeyDown={handleKeyDown} letter={col.letter} value={col.value}/>}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}