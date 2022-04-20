function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length - i; j++) {
            answer.push(numbers[i] + numbers[i + j])
        }
    }
    
    let result = [...new Set(answer.sort((a, b) => a - b))]
    return result;
}