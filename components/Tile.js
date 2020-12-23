import letterData from '../letterData';

export default function Tile(props) {
    useEffect(()=>{
        const letter = props.letter;
        const value = letterData[letter];
    });

    return(
        <div>
            {letter.toUpperCase()}
        </div>
    )


}