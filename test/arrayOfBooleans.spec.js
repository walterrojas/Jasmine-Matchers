// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfBooleans', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([true, false, new Boolean(true), new Boolean(false)]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfBooleans());
  });
});
