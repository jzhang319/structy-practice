const compress = (s) => {
  // todo
  let result = [];
  let j = 0,
    i = 0;
  while (j < s.length) {
    if (s[j] === s[j + 1]) {
      j += 1;
    } else {
      const curSlice = s.slice(i, j + 1);
      if (curSlice.length === 1) {
        result.push(s[j]);
        j += 1;
        i = j;
      } else {
        result.push(curSlice.length + s[j]);
        j += 1;
        i = j;
      }
    }
  }
  return result.join("");
};

console.log(compress("ccaaatsss")); // -> '2c3at3s'
