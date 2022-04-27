function solution(answers) {
    var answer = [];
    let student1Answer = [1, 2, 3, 4, 5];
    let student2Answer = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3Answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let student1Score = 0;
    let student2Score = 0;
    let student3Score = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === student1Answer[i % student1Answer.length]) student1Score++;
        if (answers[i] === student2Answer[i % student2Answer.length]) student2Score++;
        if (answers[i] === student3Answer[i % student3Answer.length]) student3Score++;
    }
    
    answer = [student1Score, student2Score, student3Score]
    
    return answer.map((element, index) => {
        if (element >= Math.max(...answer)) return index + 1
    }).filter(element => element != null)
}