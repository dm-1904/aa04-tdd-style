
function reverseString(string) {
  //if(typeof string !==  'string') throw new TypeError
  let ans = string.split('').reverse().join('')
  return ans
};




module.exports = reverseString
