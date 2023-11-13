const pairSum = (numbers, targetSum) => {
  // todo
  const result = []
  for (let i = 0; i < numbers.length; i++){
    const oneNum = numbers[i]
    for (let j = 1; j < numbers.length; j++){
      const twoNum = numbers[j]
      if (oneNum + twoNum === targetSum){
        result.push(i, j)
        return result
      }
    }
  }
};
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
