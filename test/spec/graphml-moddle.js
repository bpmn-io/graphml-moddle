import expect from '../expect';

import {
  createModdle
} from '../helper';


describe('graphml-moddle', function() {

  var moddle = createModdle();


  describe('parsing', function() {

    it('should publish type', function() {

      // when
      var type = moddle.getType('graphml:Graphml');

      // then
      expect(type).to.exist;
      expect(type.$descriptor).to.exist;
    });

  });


  describe('creation', function() {

    it('Graphml (root element)', function() {

      // when
      var graphml = moddle.create('graphml:Graphml');

      // then
      expect(graphml.$type).to.eql('graphml:Graphml');
    });


    it('Graph', function() {

      // when
      var graph = moddle.create('graphml:Graph');

      // then
      expect(graph.$type).to.eql('graphml:Graph');
    });

  });

});
