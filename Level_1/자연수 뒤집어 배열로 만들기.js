function solution(n) {
    var answer = [];
    let result = [];
    answer = String(n).split('');
    result = answer.map(element => Number(element))
    result.reverse();
    return result;
}