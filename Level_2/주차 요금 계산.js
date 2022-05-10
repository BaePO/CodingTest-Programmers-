function timeCal(a, fees) {
    a = a.split(' ').slice(0, -1)
    let totalTime = 0;
    
    for (let i = 0; i < a.length - 1; i += 2) {
        let inTime = a[i].split(":");
        let outTime = a[i + 1].split(":");
        totalTime += (Number(60 * outTime[0]) + Number(outTime[1])) - (Number(60 * inTime[0]) + Number(inTime[1]));
    }
    
    if (a.length % 2 !== 0) {
        totalTime += 1439 - 
            (Number(60 * a[a.length - 1].split(":")[0]) + Number(a[a.length - 1].split(":")[1]))
    }
    
    if (totalTime > fees[0]) {
    return fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
    }
    
    if (totalTime <= fees[0]) return fees[1]
}

function solution(fees, records) {
    var answer = [];
    let recordsDict = {};
    records = records.toString().split(',');
    
    for (let i = 0; i < records.length; i++) {
        let splitted = records[i].split(' ');
        recordsDict[splitted[1]] = (recordsDict[splitted[1]] || '') + splitted[0] + ' '
    }
    
    const ordered = [];
    let keys = Object.keys(recordsDict).sort();
    
    for (let i = 0; i < keys.length; i++) {
        ordered.push([keys[i], recordsDict[keys[i]]])
    }
    
    for (let i = 0; i < ordered.length; i++) {
        answer.push(timeCal(ordered[i][1], fees))
    }
    
    return answer;
}