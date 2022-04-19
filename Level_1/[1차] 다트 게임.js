function solution(dartResult) {
    var answer = 0;
    let arr3 = [];
    
    let arr1 = dartResult.split(/(\d)/).filter((a) => a).map(element => {
        return !parseInt(element) && element != 0 ? element + "/" : element;
    }).join('').split('/').slice(0, -1)
    
    for (let i = 0; i < 3; i++) {
        let arr2 = arr1[i].split(/\s*(S|D|T)\s*/)
        if (arr2[1] === "S") arr3[i] = parseInt(arr2[0])
        else if (arr2[1] === "D") arr3[i] = parseInt(arr2[0])**2
        else arr3[i] = parseInt(arr2[0])**3
        
        if (arr2[2] === "*") {
            arr3[i] *= 2;
            arr3[i-1] *= 2;
        }
        else if (arr2[2] === "#") arr3[i] *= (-1)
                
    }
    
    answer = arr3.reduce((a,b) => a+b)
    
    return answer;
}