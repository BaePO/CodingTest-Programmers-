function solution(n) {
    var answer = 0;
    let x = 0;
    
    if (Math.sqrt(n) % 1 === 0 ) {
        x = Math.sqrt(n)
        answer = Math.pow(x + 1, 2);
    }
    else {
        answer = -1
    }
    return answer;
}