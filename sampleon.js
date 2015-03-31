var flyd = require('flyd');

module.exports = function(s1, s2) {
  return flyd.stream([s1], function() {
    return s2.val;
  });
};
