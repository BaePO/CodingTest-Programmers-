function solution(seoul) {
    var answer = '';
    let x = seoul.findIndex(element => element === "Kim")
    answer = `김서방은 ${x}에 있다`
    return answer;
}