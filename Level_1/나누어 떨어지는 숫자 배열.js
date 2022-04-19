function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(element => {
        if (element % divisor === 0) return element
    })
    if (answer.length === 0) answer = [-1]
    return answer.sort((a, b) => a - b);
}