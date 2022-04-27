function solution(left, right) {
    var answer = 0;
    while (left <= right) {
        let index = 1;
        let count = 0;
        while (index <= left) {
            if (left % index === 0) count++
            index++
        }
        if (count % 2 === 0) answer += left
        if (count % 2 !== 0) answer -= left
        left++
    }
    return answer;
}