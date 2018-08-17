function test(a) {
  if (a === '') {
    return 0;
  } else if (a.includes('\n') || a.includes(',')) {
    return a.split(/[\s,]+/).reduce((sum, x) => sum + parseInt(x, 10), 0);
  } else if (!Number.isNaN(a)) { return parseInt(a, 10); }
  return 1;
}

module.exports = test;
