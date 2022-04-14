function solution(s) {
    var answer = true;
    answer = ((s.length === 4 || s.length === 6) && s.search(/\D/g) < 0) ? true : false;
    return answer;
}