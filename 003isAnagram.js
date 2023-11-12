

const anagrams = (s1, s2) => {
  // todo
  const map = new Map();
  if (s1.length!== s2.length) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
    if (map.has(s2[i])) {
      map.set(s2[i], map.get(s2[i]) - 1);
    } else {
      map.set(s2[i], -1);
    }
  }
  
};

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
