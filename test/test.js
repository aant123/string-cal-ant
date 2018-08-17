function test(a) {
  if (a === '') {
    return 0;
  } else if (a.includes('\n') || a.includes(',')) {
    a.split(/[\s,]+/).forEach((element) => {
      if (parseInt(element, 10) < 0) { throw new Error('negative number'); }
    });
    return a.split(/[\s,]+/).map(Number).reduce((sum, x) => {
      if (x <= 1000) { return sum + x; }
      return sum;
    }, 0);
  } else if (!Number.isNaN(a)) {
    if (a < 0) { throw new Error('negative number'); }
    return parseInt(a, 10);
  }
  return 1;
}

module.exports = test;
