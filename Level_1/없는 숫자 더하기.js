function solution(numbers) {
    let intNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return intNumbers.filter(element => !numbers.includes(element)).reduce((a, b) => a + b)
}