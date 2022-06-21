const convertS = (s, n, deleted) => {
    if (s.length === 1) {
        return [n, deleted];
    }
    let newS = s.replace(/[0]/g, "").length;
    deleted += s.length - newS;
    newS = newS.toString(2);
    n++;
    return convertS(newS, n, deleted)
}

function solution(s) {
    
    return convertS(s, 0, 0);
}v