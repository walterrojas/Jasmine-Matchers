// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.startingWith', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('San Francisco');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.startingWith('San'));
  });
});
