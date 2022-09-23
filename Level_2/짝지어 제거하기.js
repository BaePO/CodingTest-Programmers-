
/* function solution(s)
{
    var answer = 1;
    let indexNum = 0;
    s = s.split('');
    
    while (true) {
        
        if (indexNum === s.length - 1) {
            answer = 0;
            break; 
        }
        
        if (s.length === 0) {
            break;
        }
        
        if (s[indexNum] === s[indexNum + 1]) {
            s.splice(indexNum, 2);
            indexNum = 0;
            continue;
        }
        else indexNum++;
    }
    
    return answer;
} 
=> 효율성 테스트 시간초과 */

function solution(s)
{
    var answer = -1;
    let notPairStack = [];
    for(let i = 0; i < s.length; i++) {
        notPairStack[notPairStack.length - 1] === s[i] ?  notPairStack.pop() : notPairStack.push(s[i])
    }
    answer = notPairStack.length === 0 ? 1 : 0;
    return answer;
} // codeisneverodd의 코드 참고