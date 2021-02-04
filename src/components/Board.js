import { useState } from 'react';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);
    const [currCell, setCurrCell] = useState({x: 7, y: 7, isRight: true});

    function handleClick(e) {
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
        if (x===currCell.x && y===currCell.y) {
            setCurrCell(prev=>{
                return {
                    ...currCell,
                    isRight: !prev.isRight
                }
            })
        }
        else {
            setCurrCell({
                x: x, 
                y: y, 
                isRight: true
            });
        }
    }

    function handleKeyDown(e) {
        if (e.shiftKey) {
            if (e.key!=='Shift') {
                const [x, y] = [currCell.x, currCell.y];
                const boardCopy = JSON.parse(JSON.stringify(board));
                boardCopy[x][y]["letter"] = e.key;
                boardCopy[x][y]["color"] = "tan";
                setBoard(boardCopy);
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
    
    return (
        <div>
            <table onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0}>
                <tbody>
                    {board.map(row=>
                        <tr>
                            {row.map(col=>{
                                return (
                                <td>
                                    <div tabIndex={0}
                                        style={{
                                            backgroundColor: col.color,
                                            width: "40px",
                                            height: "40px", 
                                            textAlign: "center", 
                                            verticalAlign: "middle",
                                            lineHeight: "40px"
                                        }}
                                        data-x={col.x}
                                        data-y={col.y}
                                    >
                                        {col.letter || col.value}
                                    </div>
                                </td>
                            )
                            })}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}