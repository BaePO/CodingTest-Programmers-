function solution(n) {
    var answer = [];
    // n보다 작은 수를 일일이 나눠보는 것 => 시간 초과
    // 나머지가 1이 된다 -> 10 - 1 = 9 / 12 - 1 = 11 / 13 - 1 = 12
    // 1을 뺀 수의 1을 제외한 가장 작은 약수?
    let result = n - 1;
    for (let i = 0; i <= result; i++) {
        if (result % i === 0) answer.push(i)
        if (answer[1]) break;
    }
 
    return answer[1];
}