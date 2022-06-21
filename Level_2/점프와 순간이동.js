function solution(n)
{
    var ans = 1;
    while (n !== 1) {
        if (n % 2 !== 0) {
            ans++;
            n = n - 1;
        }
        n = n / 2;
    }
    
    return ans;
}