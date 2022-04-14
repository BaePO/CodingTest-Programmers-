function solution(s){
    var answer = true;
    let arr1 = s.split('')
    let p_number = 0;
    let y_number = 0;
    let arr2 = [];
    
    arr2 = arr1.map(element => {
        if (element.toLowerCase() === 'p') p_number++;
        else if (element.toLowerCase() === 'y') y_number++
        return element;
    })
    if (p_number === y_number) answer = true;
    else answer = false;
    
    return answer;
}