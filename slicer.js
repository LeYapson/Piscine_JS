
function slice(array, begin, end) {
  let tempArray =[];

  if(end===undefined || end > array.length)
    end = array.length;

  for (let i = begin; i < end; i++) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
console.log(slice('abcdef', 2) === 'cdef');

