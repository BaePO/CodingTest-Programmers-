function solution(n, a, b) {
    var answer = 0;
    let HasClothes = new Array(n).fill(true);
    
    // 차집합
    let reserve = b.filter(element => !a.includes(element)).sort()
    let lost = a.filter(element => !b.includes(element)).sort()
    
    let newHasClothes = HasClothes.map((element, index) => {
        for (let i = 0; i < lost.length; i++) {
        if (index === lost[i] - 1) element = false
        }
        return element
    })
    
    for (let i = 0; i < reserve.length; i++) {
        if (newHasClothes[reserve[i] - 2] === false) newHasClothes[reserve[i] - 2] = true
        else if (newHasClothes[reserve[i]] === false) newHasClothes[reserve[i]] = true
    }
    
    return newHasClothes.filter(element => element === true).length;
}