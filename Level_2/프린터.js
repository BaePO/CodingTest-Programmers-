function solution(priorities, location) {
    var answer = 0;
    
    let unique = [];
    for (let i = 0; i < priorities.length; i++) {
        unique.push(String.fromCharCode(65 + i));
    }
    const location_char = unique[location];
    
    while (priorities.length > 0) {
        if (priorities[0] < Math.max(...priorities)) {
            priorities.push(priorities[0]);
            priorities.splice(0, 1);
            unique.push(unique[0]);
            unique.splice(0, 1);
        }
        else {
            answer++;
            if (unique[0] === location_char) break;
            unique.splice(0, 1);
            priorities.splice(0, 1);
        }
    }
    return answer;
}