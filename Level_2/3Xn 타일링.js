function solution(n) {
    let rectNum = n / 2;
    let answer = [];
    for (let i = 0; i < n / 2; i++) {
        if (i === 0) answer.push(3);
        if (i === 1) answer.push(11);
        if (i > 1) answer.push(((answer[i - 1] * 4 % 1000000007) - (answer[i - 2] % 1000000007) + 1000000007) % 1000000007);
    }
    
    return answer[answer.length - 1];
}