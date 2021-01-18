import { useState } from 'react';
import Cell from './Cell';

export default function Board(props) {
    const board = props.board;
    const [currCell, setCurrCell] = useState({x: 7, y: 7, isRight: true});

    function handleClick(e) {
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
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
    }

    function handleKeyDown(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift'){
                setCurrCell({
                    ...currCell,
                    x: currCell.isRight? currCell.x : Math.min(14, currCell.x+1),
                    y: currCell.isRight? Math.min(14, currCell.y+1): currCell.y
                })
            }
        }
        else {
            if (e.key==='Backspace') {
                setCurrCell({
                    ...currCell,
                    x: currCell.isRight? currCell.x : Math.max(0, currCell.x-1),
                    y: currCell.isRight? Math.max(0, currCell.y-1): currCell.y
                })
            }
        }
    }

    function keyDownInfo(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift'){
                return e.key;
            }
        }
    }

    function clickInfo() {

    }
    
    return (
        <div>
            <table onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0}>
                <tbody>
                    {board.map(row=>
                        <tr>
                            {row.map(col=><td>{
                                <Cell keyDownInfo={keyDownInfo}
                                    clickInfo={clickInfo} 
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