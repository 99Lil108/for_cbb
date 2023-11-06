const createArray = (dim, init = null) => {
  if (dim.length == 0) return init;
  let array = [];
  let subArray = createArray(dim.slice(1), init);
  for (let i = 0; i < dim[0]; i++) {
    array.push(subArray);
  }
  return array;
};

const getScore = (diceArray) => {
  let score = diceArray.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  diceArray.sort();
  const dicebox = new Map();
  diceArray.forEach((v) => {
    let n = dicebox.get(v);
    if (n) dicebox.set(v, n + 1);
    else dicebox.set(v, 1);
  });
  const size = dicebox.size,
    keysArray = Array.from(dicebox.keys());
  if (size == 1) score += 100;
  else if (size == 2) {
    let count = dicebox.get(keysArray[0]);
    if (count == 1 || count == 4) score += 40;
    else score += 20;
  } else if (size == 3) {
    score += 10;
  } else if (size == 5) {
    const first = keysArray[0],
      last = keysArray[4];
    if ((first == 1 && last == 5) || (first == 2 && last == 6)) score += 60;
    else score += 30;
  }
  return score;
};

const queryStateScore = (states, state) => {
  let newState = [...state];
  newState = newState.map((v) => v - 1);
  return states[newState[0]][newState[1]][newState[2]][newState[3]][
    newState[4]
  ];
};
let c = 0;

const getStateSpace = () => {
  const states = createArray([6, 6, 6, 6, 6]);
  let sum = 0,
    count = 0;
  for (let i = 0; i < 6; i++)
    for (let j = 0; j < 6; j++)
      for (let k = 0; k < 6; k++)
        for (let l = 0; l < 6; l++)
          for (let m = 0; m < 6; m++) {
            let temp = getScore([i + 1, j + 1, k + 1, l + 1, m + 1]);
            states[i][j][k][l][m] = temp;
            sum += temp;
            count += 1;
            if (c < 200) {
              c += 1;
              console.log(i, j, k, l, m, "  ", states[i][j][k][l][m]);
            }
          }
  states.push(sum / count);
  return states;
};

const space = getStateSpace();
// console.log(queryStateScore(space, [2, 2, 2, 2, 2]));
// console.log(space[1][1][1][1][1]);
