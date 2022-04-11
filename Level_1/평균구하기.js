function solution(arr) {
    var answer = 0;
    var value = 0;
    
    for (let i = 0; i < arr.length; i++) {
        value += arr[i]
    }
    
    answer = value / arr.length;
    return answer;
}