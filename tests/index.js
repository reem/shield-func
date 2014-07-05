var shield = require('../lib');
var demand = require('must');

describe('shield-func', function () {
  it('should exist', function () {
    demand(shield).to.exist();
  });

  describe('when wrapping a function', function () {
    it('should return a function', function () {
      demand(shield(function () {})).to.be.a(Function);
    });

    describe('the returned function', function () {
      it('should call the passed-in function', function () {
        var called = false;
        var spy = function () { called = true; };
        shield(spy)();
        demand(called).to.be.true();
      });

      it('should call the passed-in function with no arguments', function () {
        var spy = function () { demand(arguments.length).to.equal(0); };
        shield(spy)(1, 2, 3, 4);
      });
    });
  });
});
