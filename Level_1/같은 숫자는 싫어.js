function solution(arr)
{
    var answer = [];
    let same_number = 0;
    
    for (let i = 0; i < arr.length; i++) {
        same_number = 0;
        for (let j = 1 ; i + j < arr.length; j++) {
            if (arr[i] === arr[i + j]) same_number++;
            else break;
        }
        arr.splice(i, same_number);
    }
    
    return arr;
}
// 시간초과...
