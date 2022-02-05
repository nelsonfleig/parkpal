const usedIDs: Array<[string, number]> = [];
export function randomColorC(n: any) {
  const isIn = usedIDs.find((el) => el[1] === n);
  if (!isIn) {
    let res = '#';
    for (let i = 0; i < 6; i += 1) {
      res += Math.floor(Math.random() * 10);
    }
    usedIDs.push([res, n]);
    return res;
  }
  return isIn[0];
}
