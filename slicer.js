function slice(input, startIndex, endIndex) {
  // Convert the input to an array if it is a string
  if (typeof input === 'string') {
    input = input.split('');
  }

  // Calculate the default ending index
  if (endIndex === undefined) {
    endIndex = input.length;
  }

  // Create a new array or string with the sliced elements
  var result = input.slice(startIndex, endIndex);

  // Convert the result back to a string if the input was a string
  if (typeof input === 'string') {
    result = result.join('');
  }

  return result;
}
