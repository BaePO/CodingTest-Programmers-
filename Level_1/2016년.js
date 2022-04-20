function solution(a, b) {
    var answer = '';
    let DayName = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI']
    let NewDate = new Date(2016, a - 1, b + 1)
    answer = DayName[NewDate.getDay()]
    return answer;
}