function solution(nums) {
    var answer = 0;
    let N = nums.length
    let newNums = [...new Set(nums)]
    
    if (newNums.length < (N / 2)) return newNums.length
    if (newNums.length >= (N / 2)) return (N / 2)
    
    return answer;
}