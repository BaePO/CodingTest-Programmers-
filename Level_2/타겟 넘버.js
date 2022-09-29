function solution(numbers, target) {
    var answer = 0;
    // dfs -> 깊이 우선 탐색
    const dfs = (i, n, l) => {
        if (i === l.length) { // l의 길이만큼 돌면 종료
            if (n === target) { // 돌았을 때, 더해지고 빼지는 값인 n이 target이라면 answer++
                answer++;
            }
            return; // target이 안되더라도 일단 l 길이에 도달했기에 종료
        }
        let v = l[i] // 
        dfs(i + 1, n + v, l); // n은 누적 수
        dfs(i + 1, n - v, l);
    }
    dfs(0, 0, numbers);
    
    return answer;
}