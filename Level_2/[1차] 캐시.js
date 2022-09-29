function solution(cacheSize, cities) {
    var answer = 0;
    const LRU = [];
    
    if (cacheSize === 0) {
        answer = cities.length * 5;
    }
    else {
       for (let c of cities) {
        // cache hit
        c = c.toLowerCase();
    
        if (LRU.includes(c)) {
            LRU.splice(LRU.findIndex(e => e === c), 1);
            LRU.unshift(c);
            answer += 1;
            }
        // cache miss
        else {
            if (LRU.length === cacheSize) LRU.pop();
            LRU.unshift(c);
            answer += 5;
            }
        } 
    }
    
    return answer;
}