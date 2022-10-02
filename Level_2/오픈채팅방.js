function solution(record) {
    var answer = [];
    // Dictionary에 userId를 키로 저장하고, value에 입장 여부와 닉네임을 배열로 저장
    // Enter면 in, Change면 닉네임 변경, Leave면 out
    // 단, out일 때 Change해도 변경하지 않음
    let dict = {};
    
    for (let i of record) {
        let split_i = i.split(' ');
        
        if (split_i[0] === "Enter") {
            dict[split_i[1]] = [split_i[2], "In"];
        }
        else if (split_i[0] === "Leave") {
            dict[split_i[1]][1] = "Out";
        }
        else { // Change일 때
            if (dict[split_i[1]][1] === "In") dict[split_i[1]][0] = split_i[2];
        }
    }
    
    for (let i of record) {
        const split_i = i.split(' ');
        if (split_i[0] === "Enter") answer.push(`${dict[split_i[1]][0]}님이 들어왔습니다.`);
        if (split_i[0] === "Leave") answer.push(`${dict[split_i[1]][0]}님이 나갔습니다.`);
    }
    return answer;
}