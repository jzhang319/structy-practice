const anagrams = (s1, s2) => {
  // todo
  const map = {};
  if (s1.length !== s2.length) {
    return false;
  }
  for (let char of s1) {
    if (!(char in map)) {
      map[char] = 0;
    }
    map[char] += 1;
  }
  for (let char of s2) {
    if (char in map) {
      map[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in map) {
    if (map[char] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
