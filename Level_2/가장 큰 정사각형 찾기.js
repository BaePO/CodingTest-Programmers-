// Brute Force (효율성 테스트 시간초과)
const getSquare = (board, rows, columns, length) => {
    let Area = Math.pow(length, 2);
    let compareArea = 0;
    
    for (let i = 0; i < columns; i++) {
        if (i + length > columns) break;
        for (let j = 0; j < rows; j++) {
            if (j + length > rows) break;
            for (let k = 0; k < length; k++) {
                compareArea += board[j + k].slice(i, i + length).reduce((a, b) => a + b , 0);
            }
            
            if (compareArea === Area) {
                return true;
            }
            
            compareArea = 0;
            }
        }
}

function solution(board) {
    var answer = 1234;
    let rows = board.length;
    let columns = board[0].length;
    
    for (let i = Math.max(rows, columns); i >= 0; i--) {
        if (getSquare(board, rows, columns, i)) {
            answer = Math.pow(i, 2);
            break;
        }
    }
    return answer;
}

// codeisneverodd 해설
function solution(board) {
    for (let row = 0; row < board.length; row++) {//해당 칸이 0이 아니고 위, 왼쪽 대각선, 왼쪽이 정사각형이면, 정사각형 연장가능
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] >= 1 && (!(board[row - 1] === undefined || board[row][col - 1] === undefined)))
                board[row][col] = Math.min(board[row - 1][col], board[row - 1][col - 1], board[row][col - 1]) + 1;
        }
    }
    return Math.max(...board.map((row) => Math.max(...row))) ** 2; //수정된 board 내의 최댓값이 가능한 정사각형의 최대
}
