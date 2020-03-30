function sumTwo() {
// first, we create an array from arguments that are provided to us
  let array = Array.prototype.slice.call(arguments);

// then, we check if we have two or one arguments, validate inputs (they have to be numbers!) and calculate them in case of two arguments, and in case of one argument - we prompt for one more input, validate it again and if it's a number - we return sum
  if (array.length >= 2) {
    if (typeof array[0] === "number" && typeof array[1] === "number") {
    return array[0] + array[1];
  } else {
    return undefined;
  }} else if (array.length === 1) {
    if (typeof array[0] === "number") {
      let num1 = array[0];
      function sumMore(num2) {
        if (typeof num2 === "number") {
        return num1 + num2;
        } else {
          return undefined;
        }
      }
      return sumMore;
    }
  }
}
