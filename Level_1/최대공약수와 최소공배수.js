function solution(n, m) {
    var answer = [];
    let arr1 = 1;
    let arr2 = 1;
    
    for(let i = 2; i <= Math.min(n, m); i++) {
        if((n % i == 0) && (m % i == 0)) {
            arr1 = i;
        }
    }
    
    while(true) {
        if((arr2 % n == 0) && (arr2 % m == 0)) {
            break;
        }
        arr2++;
    }
    
    answer[0] = arr1;
    answer[1] = arr2;
    
    return answer;
}