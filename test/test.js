function test(a) {
  if (a === '') {
    return 0;
  }
  return parseInt(a, 10);
}

module.exports = test;
