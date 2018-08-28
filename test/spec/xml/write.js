import expect from '../../expect';

import {
  assign,
  isFunction
} from 'min-dash';

import {
  createModdle
} from '../../helper';


describe('graphml-moddle - write', function() {

  var moddle = createModdle();


  function write(element, options, callback) {
    if (isFunction(options)) {
      callback = options;
      options = {};
    }

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    moddle.toXML(element, options, callback);
  }


  describe('should export types', function() {

    it('graphml:Graphml (root)', function(done) {

      // given
      var root = moddle.create('graphml:Graphml');

      var expectedXML =
        '<graphml:graphml xmlns:graphml="http://graphml.graphdrawing.org/xmlns" />';

      // when
      write(root, function(err, result) {

        // then
        expect(result).to.eql(expectedXML);

        done(err);
      });

    });

  });

});
