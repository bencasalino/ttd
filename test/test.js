const assert = require("assert")
const code = require("../app")




describe('#sum', function() {
      it('should test if 3+3 = 6', function() {
          assert.equal(
            code.sum(
              3, 3),
            6
          );
          });
      });
