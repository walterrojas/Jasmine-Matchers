// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.endingWith', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('Guybrush Threepwood');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.endingWith('eepwood'));
  });
});
