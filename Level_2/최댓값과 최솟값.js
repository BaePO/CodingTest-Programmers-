function solution(s) {
    var answer = '';
    let numArr = s.split(' ').sort((a, b) => a - b);
    answer = numArr[0] + " " + numArr[numArr.length - 1]
    return answer;
}