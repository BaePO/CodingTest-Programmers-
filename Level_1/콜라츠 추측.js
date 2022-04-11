function solution(num) {
    var answer = 0;
    
    if (num === 1) {
        return 0;
    }
    else { do {
        if (answer >= 500) {
            answer = -1;
            break;
        }
        num = num % 2 === 0 ? num / 2 : num * 3 + 1
        
        answer++;
    } while (num !== 1);
    
    return answer;}
    
    }