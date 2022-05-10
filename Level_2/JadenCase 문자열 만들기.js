function solution(s) {
    var answer = '';
    answer = s.split(' ').map(element => {
        if (element !== "") {
            element = element[0].toUpperCase() + element.substring(1).toLowerCase()
        }
        return element
    })
    
    return answer.join(' ');
}