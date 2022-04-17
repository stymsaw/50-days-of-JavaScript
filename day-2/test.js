const str = "JavaScript is awesome";

function reverseAString(str) {
  // write your solution here
  let newString = "";

  for (let i = str.length -1 ; i >= 0; i--) {
      newString = newString + str[i]

  }

  return newString;
}

console.log(`Reversed string is: ${reverseAString(str)}`);
