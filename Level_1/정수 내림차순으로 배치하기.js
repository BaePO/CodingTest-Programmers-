function solution(n) {
    var answer = 0 ;
    let value = [];
    const array1 = String(n).split('');
    array1.sort().reverse();
    for (let i = 0; i < array1.length ; i++) {
        value += array1[i]
    }
    answer = Number(value)
    return answer;
}