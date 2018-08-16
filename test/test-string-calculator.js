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
// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be equal 0', test1);
}


// Start Describe
describe('Example', exampleBehaviors);

