const compress = (s) => {
  let result = [];
  let j = 0,
    i = 0;
  while (j < s.length) {
    if (s[j] === s[j + 1]) {
      j += 1;
    } else {
      const curSlice = s.slice(i, j + 1);
      if (curSlice.slice === 1) {
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

// example 1
console.log(compress("ccaaatsss")); // -> '2c3at3s'

// example 2
console.log(compress("ssssbbz")); // -> '4s2bz'

// example 3
console.log(compress("ppoppppp")); // -> '2po5p'
