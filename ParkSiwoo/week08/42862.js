// 체육복
function solution(n, lost, reserve) {
  let answer = 0;
  let len = lost.length;
  for (var i = 0; i < len; i++) {
    const dump_user = lost[i];
    if (reserve.indexOf(dump_user) > -1) {
      reserve.splice(reserve.indexOf(dump_user), 1);
      lost.splice(i, 1);
    }
  }
  len = lost.length;
  answer = n - len;
  for (var i = 0; i < len; i++) {
    const lost_user = lost[i];
    if (reserve.indexOf(lost_user) > -1) {
      reserve.splice(reserve.indexOf(lost_user), 1);
      answer++;
    } else if (reserve.indexOf(lost_user - 1) > -1) {
      reserve.splice(reserve.indexOf(lost_user - 1), 1);
      answer++;
    } else if (reserve.indexOf(lost_user + 1) > -1) {
      reserve.splice(reserve.indexOf(lost_user + 1), 1);
      answer++;
    }
  }

  return answer;
}
