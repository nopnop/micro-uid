var expect = require('expect.js')
var muid   = require('../index')

describe('micro-uid', function() {
  it('should return a random 8 char string', function() {
    expect(muid()).to.match(/^[a-z0-9A-Z]{8}$/);
  })
  it('should return a random n char string', function() {
    expect(muid(42)).to.match(/^[a-z0-9A-Z]{42}$/);
  })
})
