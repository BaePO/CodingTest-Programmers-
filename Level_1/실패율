function solution(N, stages) {
    var answer = [];
    let stageFail = {};
    let userCnt = stages.length;
    
    for (let i = 1; i < N + 1; i++) {
        let clearUser = stages.filter(element => element === i).length
        stageFail[i] = clearUser / userCnt
        userCnt -= clearUser
    }
    answer = Object.keys(stageFail).map(key => [key, stageFail[key]])
    return answer.sort((first, second) => second[1] - first[1])
        .map(key => parseInt(key[0]));
}