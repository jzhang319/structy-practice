const intersection = (a, b) => {
  // todo
  const result = [];
  const answerSet = new Set();
  for (let i = 0; i < a.length; i++){
    answerSet.add(a[i]);
  }
  for (let j = 0; j < b.length; j++) {
    if (answerSet.has(b[j])) {
      result.push(b[j]);
    }
  }
  return result;
};

