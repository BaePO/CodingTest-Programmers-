function solution(w, h) {
    var answer = 1;
    const gcd = greatestCommonDivisor(w,h)
    answer = w * h - (h + w - gcd)
    return answer;
}

let greatestCommonDivisor = (a, b) => {
    while(b > 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}
// codeisneverodd Code를 참고 -> 수학 문제.. 최대공약수