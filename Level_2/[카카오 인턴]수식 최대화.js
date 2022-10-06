function solution(expression) {
    // 정규식으로 분리한 후 완전탐색 ?
    var answer = [];
    let operator = expression.match(/[-+*]/g);
    let operand = expression.split(/[-+*]/g);
    const operatorSet = [...new Set(operator)];
    
    for (let i of permutation(operatorSet, operatorSet.length)) {
        for (let j of i) {
            for (let k = 0; k < operator.length; k++) {
                let acc = [];
                if (operator[k] === j) {
                    operand[k + 1] = operate(parseInt(operand[k]), parseInt(operand[k+1]), operator[k]);
                    operator.splice(k, 1);
                    operand.splice(k, 1);
                    k--;
                }
            }
        }
        answer.push(operand[0]);
        // 객체 초기화
        operator = expression.match(/[-+*]/g);
        operand = expression.split(/[-+*]/g);
    }
    return Math.max(...answer.map(e => Math.abs(e)));
}

function permutation(arr, num){
  const res = [];
  if(num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    const permutations = permutation(rest, num-1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  })
  return res;
}
    
const operate = (a, b, operator) => {
    if (operator === '-') return a - b;
    if (operator === '+') return a + b;
    if (operator === '*') return a * b;
}