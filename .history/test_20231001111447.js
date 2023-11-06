const createArray = (dim, init = null) => {
  if (dim.length === 0) return init;
  let array = [];
  let subArray = createArray(dim.slice(1), init);
  for (let i = 0; i < dim[0]; i++) {
    array.push(subArray);
  }
  return array;
};

const queryStateScore = (states, state) => {
  state = state.map((v) => v - 1);
  return states[state[0]][state[1]][state[2]][state[3]][state[4]];
};

let flag = true;
const getStateSpace = () => {
  const states = createArray([6, 6, 6, 6, 6], 0);
  let sum = 0,
    count = 0;
  for (let i = 0; i < 6; i++)
    for (let j = 0; j < 6; j++)
      for (let k = 0; k < 6; k++)
        for (let l = 0; l < 6; l++)
          for (let m = 0; m < 6; m++) {
            if (i == 0 && j == 0 && k == 0 && (l == 0) & (m == 0)) {
            }
            let temp = getScore([i + 1, j + 1, k + 1, l + 1, m + 1]);
            states[i][j][k][l][m] = temp;
            sum += temp;
            count += 1;
          }
  states.push(sum / count);
  return states;
};
