function solution(arr) {
    var answer = 0;
    let lcm = 1;
    
    for (let i = 0; i < arr.length - 1; i++) {
        while(true) {
            if ((lcm % arr[i] == 0) && (lcm % arr[i + 1] == 0)) {
                arr[i + 1] = lcm
                break;
            }
            lcm++;
        }
    }
    
    
    return lcm;
}