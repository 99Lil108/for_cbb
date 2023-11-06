let count = 0;
const generateMask = (maskNum, step, action) => {
  if (step > 5 && maskNum == 0) {
    count += 1;
    console.log(action);
  }
  if (step <= 5 && maskNum >= 0) {
    generateMask(maskNum, step + 1, [...action, true]);
    generateMask(maskNum - 1, step + 1, [...action, false]);
  }
};
generateMask(2, 1, []);
console.log(count);
