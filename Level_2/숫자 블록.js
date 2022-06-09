function solution(begin, end) {
    
    const getMaxaliquot = n => {
        if (n === 1) return 0;
        if (n === 2 || n === 3) return 1;
        for (let i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
            if (n / i < 10000000) {
                 if (n % i === 0) {
                    return n / i;
                    break;  
                }
            }
        }
        return 1;
    }  
    
    var answer = [];
    for (let i = begin; i <= end; i++) {
        answer.push(getMaxaliquot(i));
    }
    return answer;
}