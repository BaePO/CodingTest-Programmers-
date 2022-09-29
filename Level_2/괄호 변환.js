function solution(p) {
    // 빈 문자열이면 빈 문자열 반환
    if (p.length === 0) return p;
    
    let cnt = 0;
    let isCorrect = true;
    
    for (let i = 0; i < p.length ; i++) {
        cnt = p[i] === '(' ? cnt + 1 : cnt - 1;
        
        if (cnt < 0) isCorrect = false;
        if (cnt === 0) {
            let u = p.slice(0, i + 1);
            let v = p.slice(i + 1);
            if (isCorrect) {
                return u + solution(v);
            }
            else {
                let temp = '(' + solution(v) + ')';
                let uArray = u.split('');
                uArray.splice(0, 1);
                uArray.pop();
                uArray = uArray.map(e => e === ')' ? '(' : ')')
                temp += uArray.join('');
                return temp;   
            }
        }
    }
}