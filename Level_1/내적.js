function solution(a, b) {
    var answer = 1234567890;
    answer = a.map((element, index) => {
        return element * b[index]
    })
    
    return answer.reduce((a, b) => a + b);
}