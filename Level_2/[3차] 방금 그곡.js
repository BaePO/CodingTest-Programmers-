const getTime = (t1, t2) => {
    t1 = t1.split(':');
    t2 = t2.split(':');
    return 60 * (Number(t2[0]) - Number(t1[0])) + (Number(t2[1]) - Number(t1[1]));
}

const sharpConvert = a => {
    return a.map(element => {
            if (element.length === 2) return element[0].toLowerCase();
            return element;
        });
}

function solution(m, musicinfos) {
    var answer = [];
    let timeArr = [];
    let time = 0;
    let eachMusic = [];
    let splitCompose = [];
    let compareAnswer = '';
    let index = 0;
    m = sharpConvert(m.match(/[A-Z](?:#)?/g)).join('');
    
    for (let i = 0; i < musicinfos.length; i++) {
        eachMusic = musicinfos[i].split(',');
        time = getTime(eachMusic[0], eachMusic[1]);
        splitCompose = sharpConvert(eachMusic[3].match(/[A-Z](?:#)?/g));
        
        while (index < time) {
            compareAnswer += splitCompose[index % splitCompose.length];
            index++;
        }
        
        if (compareAnswer.includes(m)) {
            timeArr.push(time);
            answer.push(eachMusic[2]);
        }
        
        compareAnswer = [];
        index = 0;
    }
    
    if (answer.length > 1) {
        answer = answer.filter((element, index) => {
           if (timeArr[index] >= Math.max(...timeArr)) return true;
        });
    }
    
    return answer.length === 0 ? "(None)" : answer[0];
}