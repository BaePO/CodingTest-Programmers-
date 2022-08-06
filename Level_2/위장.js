function solution(clothes) {
    // Dictionary 처리해야함
    // 각 type에서 안고를 수도 있으므로 원소 개수 + 1을 곱해준다.
    // 아무것도 안 입는 경우가 존재하므로 마지막에 1을 빼준다.
    // 즉, 각 key에 해당하는 원소 개수 + 1을 모두 곱해주고 마지막에 1을 뻬주면 끝
    let clothesDict = {};
    clothes.forEach((e, i) => {
        if (Object.keys(clothesDict).includes(e[1])) {
            clothesDict[e[1]]++; // 동일한 key가 존재하면 해당 value에 1을 더해준다.
        }
        else {
            clothesDict[e[1]] = 2; // 0개를 포함해주기 위해 default 값을 2로 설정
        }
    });
    return Object.values(clothesDict).reduce((a, b) => a * b) - 1; // 마지막에 1을 빼줌
}