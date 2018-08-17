const chai = require('chai');
const test = require('./test');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

function test1() {
  expect(test('')).to.be.equal(0);
  expect(test('102')).to.be.equal(102);
  expect(test('55555')).to.be.equal(55555);
}

function test3() {
  expect(test('2,3')).to.be.equal(5);
  expect(test('2\n3')).to.be.equal(5);
  expect(test('2,3,4')).to.be.equal(9);
  expect(test('2\n3\n4')).to.be.equal(9);
}

function check1000() {
  expect(test('2000,4,2')).to.be.equal(6);
}

function callTestWithNegativeNumber() {
  return test('-1');
}

function testNegative() {
  expect(callTestWithNegativeNumber).to.throw(Error);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be equal 0', test1);
  it('sum String', test3);
  it('test negative', testNegative);
  it('should be 6', check1000);
}


// Start Describe
describe('Example', exampleBehaviors);

