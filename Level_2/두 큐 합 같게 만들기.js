function solution(queue1, queue2) {
    // 배열을 계속해서 push, pop, splice로 다루면 시간복잡도가 크게 상승 / 더블포인터로 사용
    const getSum = queue => queue.reduce((a, b) => a + b, 0);
    
    let cnt = 0;
    const length = queue1.length;
    let sum1 = getSum(queue1), sum2 = getSum(queue2);
    const sumHalf = (sum1 + sum2) / 2;
    const cntMax = queue1.length * 3;
    let i = 0, j = 0;
    
    while (cnt <= cntMax) {
        let gap = sumHalf - sum1;
        
        if (gap === 0) {
            return cnt;
        }
        if (gap > 0) {
            sum1 += Math.floor(j / length) % 2 === 0 ? queue2[j % length] : queue1[j % length];
            sum2 -= Math.floor(j / length) % 2 === 0 ? queue2[j % length] : queue1[j % length];
            j++;
        }
        if (gap < 0) {
            sum1 -= Math.floor(i / length) % 2 === 0 ? queue1[i % length] : queue2[i % length];
            sum2 += Math.floor(i / length) % 2 === 0 ? queue1[i % length] : queue2[i % length];
            i++;
        }
        cnt++;
    }
    return -1;
}