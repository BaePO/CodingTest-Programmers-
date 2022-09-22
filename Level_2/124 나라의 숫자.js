function solution(n) {
    var answer = '';
    const oneTwoFour = ['4','1','2']
    while (n > 0){
        const remainder = n % 3;
        answer = oneTwoFour[remainder] + answer;
        n = Math.floor((n - 1) / 3); // 몫
    }
    return answer;
}

// From codeisneverodd Answer - 등비수열 합으로 시도하다가 실패함...