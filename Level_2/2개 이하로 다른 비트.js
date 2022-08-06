function solution(numbers) {
    var answer = [];
    for (let i in numbers) {
        if (numbers[i] % 2 === 0) {
                answer.push(numbers[i] + 1);
                continue;
            }
        let addNum = numbers[i] + 1;
        while (true) {
            let diff = 0;
            let binOrigin = numbers[i].toString(2); 
            let binAddNum = addNum.toString(2);
            if (binOrigin.length !== binAddNum.length) {
                answer.push(numbers[i] + (numbers[i] + 1) / 2)
                break;
            }
            else {
                binOrigin.split('').forEach((v, i) => {
                    if (v !== binAddNum.split('')[i]) {
                        diff++;
                    }
                })
            }    
            if (diff <= 2) {
                answer.push(addNum);
                break;
            }
            addNum++;
        }
    }
    // 문제는 비트의 길이가 달라지는 수 7(111), 8(1000)
    // 2진수의 길이가 다르면 무조건 다른 수를 하나 추가하도록? 그리고 나머지 3개를 비교하는 거지
    return answer;
}
// 테스트케이스 10, 11 실패 (시간초과)