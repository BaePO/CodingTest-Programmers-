const permutator = (answer, baseArr, k) => {
    let factorial = 1;
    for (let i = 1; i < baseArr.length; i++) {
        factorial *= i;
    }
    let portion = k / factorial;
    let rest = k % factorial;
    if (baseArr.length === 0) return answer;
    answer.push(baseArr.splice(portion, 1)[0]);
    return permutator(answer, baseArr, rest);
}

function solution(n, k) {
    let baseArr = [];
    let answer = [];
    for (let i = 1; i <= n; i++) {
        baseArr.push(i);
    }
    
    return permutator(answer, baseArr, k - 1);
}