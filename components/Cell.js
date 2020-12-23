export default function Cell(props) {
    const [letter, setLetter] = useState('');
    const [bonus, setBonus] = useState(props.bonus);

    return (<div style={props.bonus}>{letter}</div>);
}