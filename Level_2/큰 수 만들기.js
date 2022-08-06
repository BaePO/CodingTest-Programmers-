function solution(number, k) {
    let numArr = number.split('');
    let startNum = 0;
        while (k > 0) {
            if (numArr[startNum] < numArr[startNum + 1]) {
                numArr.splice(startNum, 1);
                k--;
                startNum = 0;
            }
            else startNum++;
        }
    return numArr.join('');
}
// 마지막 10번 테스트 케이스 실패 (시간 초과)