function solution(n, words) {
    let answer = [0 ,0];
        
    for (let i in words) {
        if (i > 0) {
            if (words[i][0] !== words[i - 1][words[i - 1].length - 1] || words.slice(0, i).includes(words[i]))             {
                answer = [i % n + 1, Math.floor(i / n) + 1];
                break;
            }
        }
    }
    
    return answer;
}