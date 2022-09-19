function solution(n) {
    let Fibb = n => {
        let FibbArr = [1, 2];
        for (let i = 2; i < n; i++) {
            FibbArr[i] = (FibbArr[i - 1] % 1000000007 + FibbArr[i - 2] % 1000000007) % 1000000007;
        }
        return FibbArr[n - 1] % 1000000007;
    }
    
    return Fibb(n);
}