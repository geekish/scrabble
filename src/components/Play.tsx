import playScore from '../helpers/playScore';

export default function Play(props) {
    
    function playScore() {
        const [words, isBingo] = props.playInfo;
        return playScore(words, isBingo);
    }
}