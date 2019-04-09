const assert = require('chai').assert;
const App = require('../app.js');

describe('Application', () => {

  it('should convert a 1-digit number to it\'s string form', () => {
    assert.equal(App.checkInputSize(3), 'three')
  });

  it('should convert a 2-digit number to it\'s string form', () => {
    assert.equal(App.checkInputSize(11), 'eleven');
    assert.equal(App.checkInputSize(19), 'nineteen');
  });

  it('should convert a 2-digit number to it\'s string form if it is NOT in the tens', () => {
    assert.equal(App.checkInputSize(22), 'twenty-two');
    assert.equal(App.checkInputSize(66), 'sixty-six');
  });

  it('should return the correct string for a double-digit number ending in zero', () => {
    assert.equal(App.checkInputSize(10), 'ten');
    assert.equal(App.checkInputSize(50), 'fifty');
  });

  it('should return the correct string for a triple-digit number ending in zero', () => {
    assert.equal(App.checkInputSize(100), 'one hundred');
    assert.equal(App.checkInputSize(150), 'one hundred fifty');
  });

  it('should return the correct string for a triple-digit number ending in non-zero', () => {
    assert.equal(App.checkInputSize(204), 'two hundred four');
    assert.equal(App.checkInputSize(566), 'five hundred sixty-six');
  });

  it('should return the correct string for a four-digit number ending in zeroes', () => {
    assert.equal(App.checkInputSize(4000), 'four thousand');
    assert.equal(App.checkInputSize(5600), 'five thousand six hundred');
    assert.equal(App.checkInputSize(5050), 'five thousand fifty');
  });

  it('should return the correct string for a four-digit number ending in non-zero', () => {
    assert.equal(App.checkInputSize(4004), 'four thousand four');
    assert.equal(App.checkInputSize(5079), 'five thousand seventy-nine');
    assert.equal(App.checkInputSize(5709), 'five thousand seven hundred nine');
  });
  it('should return the correct string for a five-digit number ending in non-zero', () => {
    assert.equal(App.checkInputSize(40004), 'fourty thousand four');
    assert.equal(App.checkInputSize(50079), 'fifty thousand seventy-nine');
    assert.equal(App.checkInputSize(57709), 'fifty-seven thousand seven hundred nine');
  });



});
