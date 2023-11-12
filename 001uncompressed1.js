const uncompress = (s) => {
  const numbers = '0123456789'
  let result = []
  let i = 0, j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])){
      j += 1;
    } else {
      const num = Number(s.slice(i, j))
      for (let count = 0; count < num; count++){
        result.push(s[j])
      }
    }
  }
  return result.join('')
}

// improve performance by using array instead of concatenating strings
