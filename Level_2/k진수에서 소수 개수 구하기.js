const isPrime = element => {
    if (element === 1 || !element) return false;

    for(let i = 2; i <= Math.floor(Math.sqrt(element)); i++){
        if(element % i === 0) return false; 
    }

    return true;
}

function solution(n, k) {
var answer = 0;
let convert_n = n.toString(k).split('0');

for (let i = 0; i < convert_n.length; i++) {
    if (isPrime(Number(convert_n[i])) === true) answer++;
}

return answer;
}