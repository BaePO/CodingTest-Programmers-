function solution(s) {
    const s_sort = [];
    s = s.split(/[{}]/).filter(e => {
        if (e !== ',' && e !== '') {
                return e;
        }});
    s.sort((a, b) => a.length - b.length);
    for (let e of s) {
        const array_in = e.split(',');
        for (let e_in of array_in) {
            if (!s_sort.includes(e_in)) {
                s_sort.push(e_in);
            }
        }
    }
    return s_sort.map(e => Number(e));
}