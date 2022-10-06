function solution(progresses, speeds) {
    var answer = [];
    let left = new Array(speeds.length).fill(0);
    for (let i in progresses) {
        left[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let cnt = 1;
    let idx = 0;
    let acc = 1;
    
    while (idx + acc < left.length) {
        if (left[idx] >= left[idx + acc]) {
            acc++;
            cnt++;
        }
        if (left[idx] < left[idx + acc]) {
            answer.push(cnt);
            idx += acc;
            acc = 1;
            cnt = 1;
        }   
        if (idx + acc === left.length) {
            answer.push(cnt);
        }
    } 
    return answer;
}