function solution(s) {
    var answer = '';
    let arr1 = s.split('')
    answer = arr1.sort().reverse().join('')
    return answer;
}