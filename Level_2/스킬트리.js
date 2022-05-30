const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v)

function solution(skill, skill_trees) {
    var answer = 0;
    let array1 = [];
    skill = skill.split('');
    for (let j in skill_trees) {
       for (let i = 0; i < skill.length; i++) {
            array1.push(skill_trees[j].indexOf(skill[i]));
        } 
        array1 = array1.map(e => {
            if (e === -1) return 99;
            return e;
        })
        if (isSorted(array1)) {
            if (array1[0] !== -1) {
                answer++;
            }
        }
        
        array1 = [];
    }

    return answer;
}