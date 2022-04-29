function solution(participant, completion) {
    // 어차피 완주못하는 선수는 한명밖에 없음.
    // code from : codeisneverodd
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}