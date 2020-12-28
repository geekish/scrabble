import { useState, useEffect } from 'react';

export default function Board(props) {
    const [board, setBoard] = useState(props.board);

    function handleClick(e) {
        console.log(e.target);
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