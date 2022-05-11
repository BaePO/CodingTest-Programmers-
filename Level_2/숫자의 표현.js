function solution(n) {
    var answer = 0;
    let middleNumber = 0;
    
    if (n % 2 === 0) {
        answer++;
        for (let i = 3; i <= (n / 2); i += 2) {
            middleNumber = n / i;
            if ((2 * middleNumber) % 1 === 0 || middleNumber % 1 === 0) answer++;
        }
    }
    
    if ((n % 2 !== 0) && (n !== 1)) {
        answer += 2;
        for (let i = 3; i <= (n / 2); i += 2) {
            middleNumber = n / i;
            if ((2 * middleNumber) % 1 === 0 || middleNumber % 1 === 0) answer++;
        }
    }
    
    if (n === 1) answer++;
    
    return answer;
}