function test(a) {
  let number;
  if (a === '') {
    return 0;
  } else if (a.includes(',') || a.includes('\n')) {
    number = a.split(/[\s,]+/);
    return parseInt(number[0], 10) + parseInt(number[1], 10);
  } 
  return parseInt(a, 10);
}

module.exports = test;
