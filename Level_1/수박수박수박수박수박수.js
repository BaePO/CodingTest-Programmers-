function solution(n) {
    var answer = '';
    const str1 = '수박'
    answer = n % 2 === 0 ? str1.repeat(n / 2) : str1.repeat(n / 2 + 1).slice(0, -1)
    return answer;
}