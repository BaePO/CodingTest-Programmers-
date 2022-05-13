function solution(n, t, m, p) {
    var answer = '';
    let startNumber = 0;
    let allArray = [];
    
    for (let i = 0; i < t * m; i++) {
        let convertedNumber = startNumber.toString(n).split('');
        for (let j = 0; j < convertedNumber.length; j++) {
            if (allArray.length >= t * m) break;
            allArray.push(convertedNumber[j]);
        }
        startNumber++;
    }
    
    for (let i = p - 1; i < allArray.length ; i += m) {
        answer += allArray[i];
    }
    
    return answer.toUpperCase();
}