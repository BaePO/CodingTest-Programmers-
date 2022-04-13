function solution(s, n) {
    var answer = '';
    answer = s.split('').map(element => {
        if (element === ' ') return ' '
        const code = element.charCodeAt(0)
        // code + n이 90이 넘어가면서 동시에 원래 대문자였음을 확인해야함, 소문자는 그럴필요 X
        if ((code + n > 90 && code <= 90) || (code + n > 122)) {
            return String.fromCharCode(code + n - 26)
        } else {
            return String.fromCharCode(code + n)
        }
    }).join('')
    return answer;
}