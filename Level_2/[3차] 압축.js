function solution(msg) {
    var answer = [];
    let Dict = {};
    let output = 0;
    let nextWord = 1;
    let substrSpace = 2;
    
    for (let i = 1; i <= 26; i++) {
        Dict[String.fromCharCode(i + 64)] = i;
    }
    
    for (let i = 0; i < msg.length; i += (substrSpace - 1)) {
        while (true) {
            
            if (Object.keys(Dict).includes(msg.substr(i, nextWord)) && (i + nextWord <= msg.length)) {
                output = Dict[msg.substr(i, nextWord)];
                nextWord++;
                continue;
            }
            
            Dict[msg.substr(i, nextWord)] = Object.keys(Dict).length + 1;
            answer.push(output);
            substrSpace = nextWord;
            nextWord = 1;
            break;
        }
    }
    
    return answer;
}