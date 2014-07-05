function shield(f) {
  return function() {
    f();
  };
}

module.exports = exports = shield;

