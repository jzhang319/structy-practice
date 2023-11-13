const pairProduct = (numbers, targetProduct) => {
  // todo
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const oneNum = numbers[i];
    for (let j = 1; j < numbers.length; j++) {
      const twoNum = numbers[j];
      if (oneNum * twoNum === targetProduct) {
        result.push(i, j);
        return result;
      }
    }
  }
};

