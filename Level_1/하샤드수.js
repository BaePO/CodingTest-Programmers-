function solution(x) {
    var answer = true;
    var myArr = String(x).split("").map((num)=>{
    return Number(num)
    })
    return x % myArr.reduce((acc, curr) => {return acc += curr}) == 0 ? true : false;
}
