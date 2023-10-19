function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return []
    }
    else {
      const arr = rangeOfNumbers(startNum, endNum - 1)
      arr.push(endNum)
      return arr
    }
}

console.log(rangeOfNumbers(1, 5))
// should return [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9) )
//should return [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4))
//should return [4]
