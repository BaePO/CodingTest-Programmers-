function solution(places) {
    var answer = new Array(5).fill(1);
    for (let room in places) {
        let p_locations = [];
        for (let i in places[room]) {
            for (let j in places[room][i]) {
                if (places[room][i][j] === "P") p_locations.push([parseInt(i), parseInt(j)])
            }
        }
        for (let two_p of combination(p_locations, 2)) {
            if (Math.abs(two_p[0][0] - two_p[1][0]) + Math.abs(two_p[0][1] - two_p[1][1]) <= 2) {
                // j가 다르면 j만 본다.
                if (two_p[0][1] !== two_p[1][1] && two_p[0][0] === two_p[1][0]) {
                    if (places[room][two_p[1][0]][two_p[1][1] - 1] !== "X") answer[room] = 0; 
                }
                // i가 다르면 i만 본다.
                else if(two_p[0][0] !== two_p[1][0] && two_p[0][1] === two_p[1][1]) {
                    if (places[room][two_p[1][0] - 1][two_p[1][1]] !== "X") answer[room] = 0; 
                }
                // 둘 다 다르면 둘 다 본다.
                else {
                    if (places[room][two_p[0][0]][two_p[1][1]] !== "X" 
                        || places[room][two_p[1][0]][two_p[0][1]] !== "X") answer[room] = 0; 
                }
            }
        }
    }
    return answer;
}

function combination(arr, num){
  const res = [];
  if(num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx+1);
    const combinations = combination(rest, num-1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  })
  return res;
}