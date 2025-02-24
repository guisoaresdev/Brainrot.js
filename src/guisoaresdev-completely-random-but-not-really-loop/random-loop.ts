const getRandomNumber = (lower: number, upper: number): number => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const complexForLoop = () => {
  let i = 0;

  for (let j = 0; j < 10; j++) {
    i = i + getRandomNumber(1, 1);
    console.log(`Iteration ${j + 1}: i = ${i}`);
  }

  console.log("Final value of i:", i);
};

complexForLoop();
