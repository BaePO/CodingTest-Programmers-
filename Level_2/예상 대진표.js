function solution(n,a,b)
{
    var answer = 1;
    let count = Math.log2(n);
    let roundEnd = n => {
        return Math.ceil(n / 2);
    } 
    
    while (count > 0) {
        if (Math.min(a, b) % 2 !== 0 && Math.abs(a - b) === 1) break;        
        a = roundEnd(a);
        b = roundEnd(b);
        answer++;
        count--;
    }
    
    return answer;
}