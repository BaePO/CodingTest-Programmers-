function solution(sizes) {
    // 가로랑 세로를 비교해서 큰 값을 가로로 옮김
    // 옮긴 가로 중에서 가장 큰 값을 선택
    // 작은 값은 세로로 감
    // 옮긴 세로 중에서 가장 작은 값을 선택
    // 반대도 성립
    let Sorting = sizes.map(element => element.sort((a, b) => a - b))
    let MaxRow = Math.max(...Sorting.map(element => element[0]))
    let MaxColumn = Math.max(...Sorting.map(element => element[1]))
    
    return MaxRow * MaxColumn;
}