export default function Cell(props) {
    const [letter, setLetter] = useState(props.letter);
    const [bonus, setBonus] = useState(props.bonus);

    return (<div style={props.bonus}>{letter}</div>);
}