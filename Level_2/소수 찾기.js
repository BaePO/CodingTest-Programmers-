// 소수 판별
const isPrime = element => {
    for(let i = 2; i <= Math.floor(Math.sqrt(element)); i++){
        if(element % i === 0) return false; 
    }
    if (element === 1) return false;
    
    return true;
}

// 순열 반환
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

function solution(numbers) {
    // split하고 문자열을 return해야하는데 뽑아내는 과정?
    // for 반복문으로 돌리면서 재귀함수로 문자열을 뽑아냄
    var answer = [];
    for (let i = 1; i <= numbers.length; i++) {
        let arr = permutation(numbers.split(''), i);
        for (let j of arr) {
            answer.push(parseInt(j.join('')));
        }
    }
    answer = [...new Set(answer)];
    answer = answer.filter(e => isPrime(e) ? e : false);
    // 중복 제거 위해 set로 변형 후 length return
    return answer.length;
}