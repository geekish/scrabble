export default function counter(word) {
    word = word.split("");
    return word.reduce((dict,ch)=>(dict[ch]=dict[ch]+1||1,dict),{});
}