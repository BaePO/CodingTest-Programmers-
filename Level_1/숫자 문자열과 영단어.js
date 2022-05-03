function solution(s) {
    var answer = 0;
    let Table = {};
    Table["zero"] = "0";
    Table["one"] = "1";
    Table["two"] = "2";
    Table["three"] = "3";
    Table["four"] = "4";
    Table["five"] = "5";
    Table["six"] = "6";
    Table["seven"] = "7";
    Table["eight"] = "8";
    Table["nine"] = "9";
    
    let split_s = s.match(/zero|one|two|three|four|five|six|seven|eight|nine|[0-9]/gi)
    
    answer = split_s.map(element => {
        if (!parseInt(element) && element != 0) {
            return Table[element]
        }
        else return element
        
    })
    
    return Number(answer.join(''));
}