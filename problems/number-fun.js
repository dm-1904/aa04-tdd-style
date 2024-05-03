function returnsThree() {
  return 3
}

function reciprocal(n) {
  if(n < 1 || n > 1000000){
    throw new RangeError("Must be between 1 - 1,000,000")
  }
  return 1 / n;
}

console.log(reciprocal(2))

module.exports = {
  returnsThree,
  reciprocal
};
