import { useState, useEffect } from 'react';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);
    const [currCell, setCurrCell] = useState(null);

    function handleClick(e) {
        const coords=e.target.getAttribute('coords');
        setCurrCell(coords);
    }
    
    return (
        <div>
            <table onClick={handleClick}>
                <tbody>
                    {board.map(row=>
                        <tr>
                            {row.map(col=><td>{col}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}