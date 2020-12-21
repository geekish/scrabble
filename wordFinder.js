export default function wordFinder(rack) {
    const matchObj={}; // we'll use this to avoid duplicates
    rack = rack.split('').sort((a,b)=>a>b?1:-1);
    for (let i=0;i<rack.length;i++) {
        for (let j=i+1;j<rack.length;j++) {
            // Checking each two-letter substring
            const keyStr=rack[i]+rack[j];
            const match=dictObj[keyStr];
            if (match && !matchObj[keyStr]) {
                matchObj[keyStr]=match;
            }
            for (let k=j+1;k<rack.length;k++) {
                // Checking each three-letter substring
                const keyStr=rack[i]+rack[j]+rack[k];
                const match=dictObj[keyStr];
                if (match && !matchObj[keyStr]) {
                    matchObj[keyStr]=match;
                }
                for (let l=k+1;l<rack.length;l++) {
                    // Checking each four-letter substring
                    const keyStr=rack[i]+rack[j]+rack[k]+rack[l];
                    const match=dictObj[keyStr];
                    if (match && !matchObj[keyStr]) {
                        matchObj[keyStr]=match;
                    }
                }
            }
        }
    }
    return matchObj;
}