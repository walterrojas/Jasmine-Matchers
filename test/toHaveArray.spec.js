// modules
const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

// spec
describe('toHaveArray', () => {
  describeToHaveArrayX('toHaveArray', () => {
    it('should confirm', () => {
      expect({
        memberName: []
      }).toHaveArray('memberName');
      expect({
        memberName: [1, 2, 3]
      }).toHaveArray('memberName');
    });
  });
});
