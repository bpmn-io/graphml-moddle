import {
  createModdle
} from '../../helper';

import {
  fromFile as fromXMLFile,
  toXML,
  validate
} from '../../xml-helper';


const moddle = createModdle();

function fromFile(file, done) {
  fromXMLFile(moddle, file, done);
}


describe('graphml-moddle - roundtrip', function() {

  describe('should serialize after read', function() {

    this.timeout(15000);


    it('diagram', function(done) {

      // given
      fromFile('test/fixtures/graphml/diagram.graphml', function(err, result) {

        // when
        toXML(result, { format: true }, function(err, xml) {

          validate(err, xml, done);
        });

      });

    });


    it('diagram with attributes', function(done) {

      // given
      fromFile('test/fixtures/graphml/attributes.graphml', function(err, result) {

        // when
        toXML(result, { format: true }, function(err, xml) {
          validate(err, xml, done);
        });

      });

    });


    it('case diagram', function(done) {

      // given
      fromFile('test/fixtures/graphml/case.graphml', function(err, result) {

        // when
        toXML(result, { format: true }, function(err, xml) {
          validate(err, xml, done);
        });

      });

    });

  });

});
