function solution(new_id) {
    var answer = '';
    // 1단계
    answer = new_id.toLowerCase();
    // 2단계
    answer = answer.replace(/[^a-z0-9-._]/gim,'');
    // 3단계
    answer = answer.replace(/\.+/g,'.');
    // 4단계
    answer = answer.replace(/^\.|\.$/g,'');
    // 5단계
    answer = (answer.length === 0) ? answer += "a" : answer;
    // 6단계
    answer = answer.substr(0, 15);
    answer = answer.replace(/^\.|\.$/g,'');
    // 7단계
    if (answer.length <= 2) {
        while (answer.length < 3) {
            answer += answer[answer.length - 1]
        }
    }
    return answer;
}