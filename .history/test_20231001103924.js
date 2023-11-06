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
      let;
    }
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
