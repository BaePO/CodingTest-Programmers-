function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for (count; count > 0; count--) {
        totalPrice += (price * count);
    }
    
    answer = money - totalPrice < 0 ? totalPrice - money : 0;
    return answer;
}