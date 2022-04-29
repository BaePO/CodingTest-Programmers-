function solution(board, moves) {
    var answer = 0;
    let basket = [];
    for (let j = 0; j < moves.length; j++) {
       for (let i = 0; i < board.length; i++) {
           if (board[i][moves[j] - 1] !== 0) {
               basket.push(board[i][moves[j] - 1])
               board[i][moves[j] - 1] = 0
               break;
           }
        }
        
        if (basket.length !== 0 && (basket[basket.length - 1] === basket[basket.length - 2])) {
            answer += 2
            basket = basket.slice(0, -2)
        }
        
    } 
    return answer;
}