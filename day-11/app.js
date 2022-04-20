function fibonacci(num) {
  // write your solution here
  //initalize
  let firstTerm = 0;
  let secondTerm = 1;

  let nextTerm = 0;

  for (let i = 2; i <= num; i++) {
    nextTerm = firstTerm + secondTerm;

    firstTerm = secondTerm;

    secondTerm = nextTerm;
  }

  return num ? secondTerm : firstTerm;
}

console.log(`fibonacci value at position 5: ${fibonacci(33)}`);
