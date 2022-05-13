function solution(s){
    if (s.length % 2 !== 0) return false;
    
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') cnt++;
        else cnt--;
        
        if (cnt < 0) return false;
    }
    
    if (cnt !== 0) return false;
    else return true;
}