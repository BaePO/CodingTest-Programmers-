function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => {
        return b - a;
    })
    for (let i = 0; i < citations.length; i++) {
        let cited = i + 1;
        for (let j = i + 1; j < citations.length; j++) {
            if (citations[i] > citations[j]) {
                break;
            }
            else cited++;
        }
        if (cited > citations[i]) {
            break;
        }
        else answer = cited;
    }
    return answer;
}