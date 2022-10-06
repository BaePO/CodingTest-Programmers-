function solution(orders, course) {
    var answer = [];
    for (let i of course) {
        let tmp_arr = [];
        let tmp_dic = {};
       for (let j of orders) {
            if (j.length >= i) {
                for (let k of combination(j.split(''), i)) {
                    tmp_dic[k.sort()] = 0;
                    tmp_arr.push(k);
                }
            }
        }
        for (let l of tmp_arr) {
            tmp_dic[l.sort()]++;
        }
        getMax(tmp_dic).forEach(e => answer.push(e.split(',').join('')));
    }
    
    return answer.sort();
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

const getMax = object => {
        return Object.keys(object).filter(x => {
            if (object[x] >= 2) {
               return object[x] == Math.max.apply(null, 
                Object.values(object)); 
            } 
       });
    };