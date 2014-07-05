var shield = require('../lib');
var demand = require('must');

describe('shield-func', function () {
  it('should exist', function () {
    demand(shield).to.exist();
  });
});
