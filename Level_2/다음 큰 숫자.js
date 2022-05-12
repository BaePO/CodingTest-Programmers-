const get1Count = a => a.toString(2).match(/1/g).length;

function solution(n) {
    
    var answer = n + 1;
    let n1Count = get1Count(n);
    
    while (true) {
        if (get1Count(answer) === n1Count) break;
        answer++;
    }
    
    return answer;
}