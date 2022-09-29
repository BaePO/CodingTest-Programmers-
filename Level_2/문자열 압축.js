function solution(s) {
    // unit은 1부터 s.length까지 진행한다. (재귀로 돌리고 그 중 최솟값을 반환)
    // 재귀함수 abbrev (s, unit)
    // 간격은 unit만큼 확인하고 cnt는 1부터 시작
    // current는 첫 비교 대상, temp는 간격 떨어진 비교 대상
    // cnt가 1이면 1a 이기에 1을 생략한다. 아니라면 cnt + current로 result 배열에 push한다.
    // current와 temp가 같다면 cnt++ 해주고 result의 맨 뒤 원소를 제거 (어차피 동일한 원소이므로)
    // 만약에 다르면 cnt를 1로 초기화한다.
    // 다른 순간부터는 interval = 1, cnt = 1로 재설정 
    // 마지막에는 result 배열의 길이를 보내서 그 중 최솟값을 반환
    
    var answer = [];
    
    for (let unit = 1; unit <= s.length; unit++) {
        answer.push(abbrev(s, unit));
    }
    
    return Math.min(...answer);
}

const abbrev = (s, unit) => {
    let interval = unit;
    let cnt = 1;
    let result = [];
    
    for (let i = 0; i < s.length; i += interval) {
        let current = s.slice(i, i + unit);
        let temp = s.slice(i + unit, i + 2 * unit);
        cnt === 1 ? result.push(current) : result.push(cnt + current);
        
        if (current === temp) {
            cnt++;
            result.pop();
        }
        else {
            cnt = 1;
        }
    }
    return result.join('').length;
}