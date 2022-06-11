function solution(n, left, right) {
    var answer = [];
    let startRow = Math.floor(left / n) + 1;
    let leftSlice = left % n;
    let endRow = Math.floor(right / n) + 1;

    for (let i = startRow; i <= endRow; i++) {
        let repeatNum = i;
        let stackNum = i + 1;
        while (repeatNum > 0) {
            answer.push(i);
            repeatNum--;
        }
        while (stackNum <= n) {
            answer.push(stackNum);
            stackNum++;
        }
    }
    
    return answer.splice(leftSlice, right - left + 1);
}