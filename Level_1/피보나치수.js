function solution(n) {
    let Fibb = n => {
        let FibbArr = new Array(n + 1).fill(0);
        FibbArr[0] = 0;
        FibbArr[1] = 1;
        for (let i = 2; i <= n; i++) {
            FibbArr[i] = (FibbArr[i - 1] + FibbArr[i - 2]) % 1234567;
        }
        return FibbArr[n]
    }
    
    return Fibb(n);
}