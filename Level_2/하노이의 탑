const Hanoi = n => {
    if (n === 1) return [[1, 3]];
    if (n === 2) return [[1, 2], [1, 3], [2, 3]];
    if (n > 2) {
        let arr3 = Hanoi(n - 2);
        arr3.push(...[[1, 2]], ...reverseAll(Hanoi(n - 1), 2**(n - 2)), ...[[1, 3]], ...change12(Hanoi(n - 1)));
        return arr3;
    }
}

const change12 = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (arr[i][j] === 1) {
                arr[i][j] = 2;
            }
            else if (arr[i][j] === 2) {
                arr[i][j] = 1;
            }
        }
    }
    return arr;
}

const reverseAll = (arr, n) => {
    arr = arr.slice(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].reverse();
    }
    return arr.reverse();
}

function solution(n) {
    return Hanoi(n);
}