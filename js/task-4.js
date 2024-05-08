function findNumber(start, end, divisor) {
  let number
  for (number = start; number <= end; number++) {
    if (number % divisor === 0) {
      return number;
    }
  }
}
console.log(findNumber(8, 17, 3));
