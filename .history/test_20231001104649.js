const queryStateScore = (states, state) => {
  state = state.map((v) => v - 1);
  return states[state[0]][state[1]][state[2]][state[3]][state[4]];
};

const calScoreRecursively = (states, state, step, action) => {
  if (step < 1) return [queryStateScore(states, state), 1];
  if (step <= 5) {
    let stateCopy = [...state],
      sum = 0,
      count = 0,
      tempS,
      TempC;
    if (action[step - 1]) {
      [tempS, TempC] = calScoreRecursively(states, stateCopy, step - 1, action);
    } else {
      [tempS, TempC] = [1, 2, 3, 4, 5, 6].reduce(
        (accumulator, current) => {
          stateCopy[step - 1] = current;
          let [s1, c0] = calScoreRecursively(
            states,
            stateCopy,
            step + 1,
            action
          );
          accumulator[0] += s1;
          accumulator[1] += c0;
          return accumulator;
        },
        [0, 0]
      );
    }
    sum += tempS;
    count += TempC;
    if (step == 5) {
      sum = tempS / TempC;
      TempC = 1;
    }
    return [sum, count];
  }
  return [0, 0];
};

const generateMask = (states, state, maskNum, step, action) => {
  if (step > 5 && maskNum == 0) {
    calScoreRecursively(states, state, 5, action);
  }
  if (step <= 5 && maskNum >= 0) {
    generateMask(maskNum, step + 1, [...action, true]);
    generateMask(maskNum - 1, step + 1, [...action, false]);
  }
};
