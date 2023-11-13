const mostFrequentChar = (s) => {
  // todo
  const map = {};
  let maxCount = 0;
  let maxChar;
  for (let char of s) {
    if (!(char in map)) {
      map[char] = 0;
    }
    map[char]++;
  }
  for (let char in map) {
    if (map[char] > maxCount) {
      maxCount = map[char];
      maxChar = char;
    }
  }
  return maxChar;
};


console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'

