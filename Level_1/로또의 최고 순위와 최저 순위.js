function solution(lottos, win_nums) {
    var answer = [];
    let minRank = 0;
    minRank = lottos.filter(element => !win_nums.includes(element)).length
    minRank = (minRank === 6) ? minRank : minRank + 1;
    
    let maxRank = 0;
    maxRank = lottos.filter(element => win_nums.includes(element) || element === 0).length
    maxRank = (maxRank === 0)? 6 - maxRank : 7 - maxRank;
    
    answer = [maxRank, minRank]
    return answer;
}