function solution(nums) {
    var answer = 0;
    
    const isPrime = element => {
        for(let i = 2; i <= Math.floor(Math.sqrt(element)); i++){
            if(element % i === 0) return false; 
        }
        return true;
    }
        
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1 ; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let numsAdd = nums[i] + nums[j] + nums[k]
                if (isPrime(numsAdd) === true) answer++
                } 
            }
        }
    
    return answer;
}