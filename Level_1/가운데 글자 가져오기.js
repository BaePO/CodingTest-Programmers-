function solution(s) {
    var answer = '';
    let index = Math.floor(s.length / 2)
    answer = s.length % 2 === 0 ? s[index - 1] + s[index]: s[index];
    
    return answer
}