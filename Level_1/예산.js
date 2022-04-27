function solution(d, budget) {
    var answer = 0;
    let sorted_d = d.sort((a, b) => a - b)
    let addBudget = 0;
    for (let i = 0; i < d.length; i++) {
        addBudget += sorted_d[i]
        if (addBudget > budget) break;
        answer++ 
    }
    return answer;
}