function solution(str1, str2) {
    let set1 = [], set2 = [];
    
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    
    str1.forEach((e, i) => {
        if (i !== str1.length - 1 && e.charCodeAt() >= 97 && e.charCodeAt() <= 122 && str1[i + 1].charCodeAt() >= 97 && str1[i + 1].charCodeAt() <= 122) {
            set1.push(e + str1[i + 1]);
        } 
    })

    str2.forEach((e, i) => {
        if (i !== str2.length - 1 && e.charCodeAt() >= 97 && e.charCodeAt() <= 122 && str2[i + 1].charCodeAt() >= 97 && str2[i + 1].charCodeAt() <= 122) {
            set2.push(e + str2[i + 1]);
        } 
    })
    
    let union = [...new Set([...set1, ...set2])];
    
    // 길이를 구하는 방식이 일반적인 집합이 아님
    // set로 바꾼 리스트에서 각 원소에 대해서 각 set에서 개수를 구한 뒤 최소는 Intersection, 최대는 Union 길이로 생각
    // 둘 중에 0이 있으면 교집합에는 안들어가므로 만족함.
    let intersectionLen = 0;
    let unionLen = 0;
    
    for (const i of union) {
        const set1Len = set1.filter(e => e === i).length;
        const set2Len = set2.filter(e => e === i).length;
        intersectionLen += Math.min(set1Len, set2Len);
        unionLen += Math.max(set1Len, set2Len);
    }
    
    return unionLen === 0 ? 65536 : Math.floor(intersectionLen / unionLen * 65536);
}