function solution(n)
{
    var answer = 0;
    let array1 = [];
    array1 = String(n).split('');
    
    const array2 = array1.map(element => Number(element))
    for (let i = 0; i < array2.length; i++) {
        answer += array2[i]
    }
    
    return answer;
}