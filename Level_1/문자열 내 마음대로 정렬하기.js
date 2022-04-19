function solution(strings, n) {
    var answer = [];
    let arr3 = strings.sort();
    
    answer = arr3.sort((a, b) => {
        let arr1 = a.split('')
        let arr2 = b.split('')
        
        return arr1[n].charCodeAt(0) - arr2[n].charCodeAt(0);
    })
                       
    return answer;
}