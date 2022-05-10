function solution(A,B){
    var answer = 0;
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    answer = A.map((element, index) => element * B[index]).reduce((a, b) => a + b);
    
    return answer;
}