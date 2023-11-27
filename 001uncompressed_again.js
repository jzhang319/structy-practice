const umcompress = (s) => {
  const numbers = '0123456789'
  let result = []
  let i = 0, j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])){
      j += 1
    } else {
      const num = Number(s.slice(i, j))
      for (let count = 0; count < num; count++){
        result.push(s[j])
      }
      j += 1
      i = j
    }
  }
  return result
}

// example 1
console.log(uncompress("2c3a1t")); // -> 'ccaaat')

// example 2
console.log(uncompress("4s2b")); // -> 'ssssbb'

// example 3
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
