const calScoreRecursively = (states, state, step, action) => {
  if (step < 1) return [queryStateScore(states, state), 1];
  if (step <= 5 && maskNum > 0) {
    let stateCopy = [...state],
      sum = 0,
      count = 0;
    let [tempS1, tempC1] = calScoreRecursively(
      states,
      stateCopy,
      maskNum,
      step + 1
    );
    stateCopy = [...state];
    let [tempS2, tempC2] = [1, 2, 3, 4, 5, 6].reduce(
      (accumulator, current) => {
        stateCopy[step - 1] = current;
        let [s1, c0] = calScoreRecursively(
          states,
          stateCopy,
          maskNum - 1,
          step + 1
        );
        accumulator[0] += s1;
        accumulator[1] += c0;
        return accumulator;
      },
      [0, 0]
    );
    sum += tempS1 + tempS2;
    count += tempC1 + tempC2;
    return [sum, count];
  }
  return [0, 0];
};

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
