function solution(phone_number) {
    var answer = '';
    let length = phone_number.length;
    for (let i = 0; i < phone_number.length - 4 ; i++) {
        answer += '*'
    }
    answer += phone_number.slice(-4);
    return answer;
}