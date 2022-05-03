function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    let id_report = Array(id_list.length).fill('')
    let id_reported = {};
    let id_stopped = [];

    report = report.map(element => element.split(' '))
    
    for (let i = 0; i < report.length; i++) {
        id_report[id_list.indexOf(report[i][0])] += report[i][1] + " "
    }
    
    id_report = id_report.map(x => [...new Set(x.split(' '))])
    
    id_report.join('').split(',').slice(0, -1).forEach((x) => {
        id_reported[x] = (id_reported[x] || 0) + 1;
    });
    
    id_stopped = Object.keys(id_reported).filter(element => {
        if (id_reported[element] >= k) return element
    })
    
    for (let i = 0; i < answer.length; i++) {
        id_report[i].forEach(element => {
            if (id_stopped.includes(element)) answer[i]++
    })}
    
    return answer
}