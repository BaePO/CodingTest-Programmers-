function solution(people, limit) {
    var answer = 0;
    
    people.sort((a, b) => {
        return a - b;
    })
        
    while (people.length > 1) {
        if (people[0] + people[people.length - 1] <= limit) {
            people.splice(0, 1);
            people.pop();
            answer++;
        }
        else {
            people.pop();
            answer++
        }
    }
    
    if (people.length === 1) answer++;
    
    return answer;
}