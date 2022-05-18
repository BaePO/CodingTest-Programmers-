function solution(dirs) {
    let compareArr = ["00"];
    let vertical = 0;
    let horizontal = 0;
    
    for (let index in dirs) {
        if (dirs[index] === "U" && vertical < 5) vertical++;
        if (dirs[index] === "L" && horizontal > -5) horizontal--;
        if (dirs[index] === "D" && vertical > -5) vertical--;
        if (dirs[index] === "R" && horizontal < 5) horizontal++;
        compareArr.push(`${horizontal}${vertical}`);
    }
    
    let compareArrSet = compareArr.map((element, index) => {
        if (compareArr[index] === compareArr[index + 1]) return undefined;
        if (dirs[index] === "U" || dirs[index] === "R") return compareArr[index] + compareArr[index + 1];
        if (dirs[index] === "D" || dirs[index] === "L") return compareArr[index + 1] + compareArr[index];
    })
    
    return [...new Set(compareArrSet)].length - 1;
}