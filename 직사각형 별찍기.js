process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = "*";
    const line1 = (`${star.repeat(n[0])}\n`);
    console.log(`${line1.repeat(n[1])}`);
});