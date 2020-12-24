export default function Board(props) {
    return (
        <div>
            <table>
                <tbody>
                    {props.board.map(row=>
                        <tr>
                            {row.map(col=><td>{col}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}