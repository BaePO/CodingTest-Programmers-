const HEAD = args => args.split(/[0-9]/g)[0].toLowerCase();
const NUM = args => Number(args.match(/\d+/gi)[0]);

function solution(files) {
    
    files = files.sort((a, b) => {
        return NUM(a) >= NUM(b) ? 0 : -1;
    })
    
    files = files.sort((a, b) => {
        return HEAD(a) >= HEAD(b) ? 0 : -1 ;
    })
    
    return files;
}