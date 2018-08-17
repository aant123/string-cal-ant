function test(a) {
  if (a === '') {
    return 0;
  } else if (a.includes('\n') || a.includes(',')) {
    a.split(/[\s,]+/).forEach((element) => {
      if (parseInt(element, 10) < 0) { throw new Error('negative number'); }
    });
    return a.split(/[\s,]+/).reduce((sum, x) => sum + parseInt(x, 10), 0);
  } else if (!Number.isNaN(a)) {
    // console.log(a);
    if (a < 0) { throw new Error('negative number'); }
    return parseInt(a, 10);
  }
  return 1;
}

module.exports = test;
