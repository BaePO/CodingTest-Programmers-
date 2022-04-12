function solution(arr) {
    var answer = [];
    const isSmallNumber = Math.min(...arr);
    answer = arr
    answer.splice(arr.indexOf(isSmallNumber), 1)
    
    if (answer.length == 0) {
        answer = [-1]
    }
    return answer;
}