function solution(absolutes, signs) {
    var answer = 123456789;
    answer = absolutes.map((element, index) => {
        if (signs[index] === true) return element
        if (signs[index] === false) return -element
    })
    return answer.reduce((a, b) => a + b);
}