function solution(n) {
    var answer = 0;
    let isPrimeArr = new Array(n + 1).fill(true)
    for (let num = 2, sqrt = Math.sqrt(n); num <= sqrt; num++) {
        if (isPrimeArr[num] === true) {
            for (let j = 2; num * j <= n; j++) isPrimeArr[num * j] = false
        }
    }
    for (const isPrime of isPrimeArr) if (isPrime) answer += 1
    answer -= 2 //인덱스 0과 1 제외
    return answer;
}

// n = 20일 때,
// isPrimeArr = [true, true, true... 21개]
