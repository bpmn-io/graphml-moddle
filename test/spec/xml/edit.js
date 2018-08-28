import expect from '../../expect';

import {
  createModdle,
  readFile
} from '../../helper';

import {
  toXML
} from '../../xml-helper';


describe('graphml-moddle - edit', function() {

  var moddle = createModdle();


  it('should add extension', function(done) {

    // given
    var fileContents = readFile('test/fixtures/graphml/diagram.graphml');

    moddle.fromXML(fileContents, 'graphml:Graphml', function(err, result) {

      var key = moddle.create('graphml:Key', {
        id: 'foo',
        'attr.type': 'node'
      });

      result.get('extensions').push(key);

      // when
      toXML(result, { format: true }, function(err, xml) {

        // then
        expect(xml).to.contain('<key id="foo" attr.type="node" />');

        done(err);
      });
    });

  });

});
