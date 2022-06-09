function solution(n) {
    var answer = [];
    answer.push(1);
    answer.push(2);
    for (let i = 2; i < n; i++) {
        answer.push(answer[i - 2] % 1234567 + answer[i - 1] % 1234567);
    }
    return answer[n - 1] % 1234567;
}