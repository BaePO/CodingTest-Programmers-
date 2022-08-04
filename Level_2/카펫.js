function solution(brown, yellow) {
    var answer = [];
    let totalNum = brown + yellow;
    let row = 0;
    for (let column = 3; column < totalNum; column++) {
        if (totalNum % column === 0 && totalNum / column >= column)
            row = totalNum / column;
        if (row * 2 + column * 2 - 4 === brown) {
            answer = [row, column];
            break;
        }
    }
    return answer;
}