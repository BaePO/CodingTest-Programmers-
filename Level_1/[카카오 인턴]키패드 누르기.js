function solution(numbers, hand) {
    var answer = '';
    let leftFinger = [0, 3];
    let rightFinger = [2, 3];
    let keypad = [[1, 4, 7, "*"], [2, 5, 8, 0], [3, 6, 9, "#"]];
    
    const subArray = (arr1, arr2) => {
        return arr1.map((a, b) => a - arr2[b]).reduce((a, b) => Math.abs(a) + Math.abs(b))
    }
    
    for (let i = 0; i < numbers.length; i++) {
        if (keypad[0].includes(numbers[i])) {
            answer += "L";
            leftFinger[0] = 0;
            leftFinger[1] = keypad[0].findIndex(element => element === numbers[i]);
        }
        if (keypad[2].includes(numbers[i])) {
            answer += "R";
            rightFinger[0] = 2;
            rightFinger[1] = keypad[2].findIndex(element => element === numbers[i]);
        }
        if (keypad[1].includes(numbers[i])) {
            let middle = [1, keypad[1].findIndex(element => element === numbers[i])];
            if (subArray(middle, leftFinger) < subArray(middle, rightFinger)) {
                answer += "L";
                leftFinger[0] = 1;
                leftFinger[1] = middle[1];
            }
            if (subArray(middle, leftFinger) > subArray(middle, rightFinger)) {
                answer += "R";
                rightFinger[0] = 1;
                rightFinger[1] = middle[1];
            }
            if (subArray(middle, leftFinger) === subArray(middle, rightFinger)) {
                if (hand === "right") {
                    answer += "R"; 
                    rightFinger[0] = 1;
                    rightFinger[1] = middle[1];
                }
                if (hand === "left") {
                    answer += "L";
                    leftFinger[0] = 1;
                    leftFinger[1] = middle[1];
                }
            }
        }
    }
    return answer;
}