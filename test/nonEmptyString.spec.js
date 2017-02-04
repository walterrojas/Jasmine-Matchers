// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.nonEmptyString', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('hello world');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyString());
  });
});
