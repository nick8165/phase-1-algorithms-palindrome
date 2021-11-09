function isPalindrome(word) {
  let char = word.split('')
  let char2 = []
  for (let i = 0; i < char.length; i++) {
    char2.unshift(char[i])
  }
  char = char.join('')
  char2 = char2.join('')
  return char === char2
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
