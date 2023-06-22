const removeFromArray = function(array, ...args) {
  for (const arg of args) {
    let idx = array.indexOf(arg);
    if (idx>-1) {array.splice(idx, 1)}
  }
  return array;

  // return array.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;