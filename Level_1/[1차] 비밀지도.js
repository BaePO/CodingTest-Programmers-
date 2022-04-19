function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1 = arr1.map(element => {
        let bi_element = Number(element).toString(2)
        while(bi_element.length < n) bi_element = "0" + bi_element
        return bi_element
    })
    
    arr2 = arr2.map(element => {
        let bi_element = Number(element).toString(2)
        while(bi_element.length < n) bi_element = "0" + bi_element
        return bi_element
    })
    
    for (let i = 0; i < n; i++) {
        answer[i] = Number(arr1[i]) + Number(arr2[i]);
        while(String(answer[i]).length < n) answer[i] = "0" + String(answer[i])
        answer[i] = String(answer[i]).split('').map(element => {
            return element == 1 || element == 2 ? "#" : " ";
        }).join('')
    }
    
    return answer;
}