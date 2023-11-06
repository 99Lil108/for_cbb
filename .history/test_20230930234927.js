let count = 0,
  sum = 0;
const generateMask = (maskNum, step, action) => {
  sum += 1;
  if (step > 5 && maskNum == 0) {
    count += 1;
    console.log(action);
  }
  if (step <= 5 && maskNum >= 0) {
    generateMask(maskNum, step + 1, [...action, true]);
    generateMask(maskNum - 1, step + 1, [...action, false]);
  }
};
generateMask(4, 1, []);
console.log(count);
