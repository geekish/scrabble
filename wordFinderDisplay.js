import wordFinder from './wordFinder';

export default function wordFinderDisplay(rack) {
    const matches = wordFinder(rack); // object from above function
    // Slightly complex-looking expression that basically starts out with an empty array, then loops through the matches values and pushes them into our ongoing array
    const matchesArray = Object.values(matches).reduce((rez,array)=>rez.concat(array),[]);
    // Returns the array as a string, with words separated by commas
    return matchesArray.sort((a,b)=>a>b?1:-1).join(', ');
}