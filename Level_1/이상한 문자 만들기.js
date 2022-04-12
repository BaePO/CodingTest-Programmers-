function solution(s) {
    var answer = '';
    let array1 = s.split(' ');
    let change = [];
    
    for (let i = 0; i < array1.length; i++) {
        change = array1[i].split('')
        for (let j = 0; j < change.length; j++) {
            if (j % 2 === 0) {
                change[j] = change[j].toUpperCase()
            }
            else {
                change[j] = change[j].toLowerCase()
            }
            answer += change[j]
        }
        answer += ' '
        
    }
    answer = answer.slice(0, -1)
    return answer;
}