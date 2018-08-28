import expect from '../../expect';

import {
  createModdle,
  readFile
} from '../../helper';


const moddle = createModdle();

function read(xml, root, opts, callback) {
  return moddle.fromXML(xml, root, opts, callback);
}

function fromFile(file, root, opts, callback) {
  var contents = readFile(file);

  return read(contents, root, opts, callback);
}


describe('graphml-moddle - read', function() {

  describe('should import graphml:Graphml', function() {

    it('simple', function(done) {

      // when
      fromFile('test/fixtures/graphml/diagram.graphml', 'graphml:Graphml', function(err, result) {

        // assume
        expect(err).not.to.exist;

        // then
        expect(result.$type).to.eql('graphml:Graphml');

        expect(result.extensions).not.to.exist;

        // structure fits
        expect(result.rootElements).to.jsonEqual([
          {
            $type: 'graphml:Graph',
            id: 'G',
            edgedefault: 'undirected',
            nodes: [
              {
                $type: 'graphml:Node',
                id: 'n0'
              },
              {
                $type: 'graphml:Node',
                id: 'n1'
              }
            ],
            edges: [
              {
                $type: 'graphml:Edge',
                id: 'e1'
              }
            ]
          }
        ]);


        const graph = result.rootElements[0];

        // references are wired
        expect(graph.edges[0].source).to.equal(graph.nodes[0]);
        expect(graph.edges[0].target).to.equal(graph.nodes[1]);

        done(err);
      });

    });


    it('with attributes', function(done) {

      // when
      fromFile('test/fixtures/graphml/attributes.graphml', 'graphml:Graphml', function(err, result) {

        // assume
        expect(err).not.to.exist;

        // then
        expect(result.$type).to.eql('graphml:Graphml');

        expect(result.extensions).to.jsonEqual([
          {
            $type: 'graphml:Key',
            id: 'd0',
            for: 'node',
            'attr.name': 'color',
            'attr.type': 'string',
            default: 'yellow'
          },
          {
            $type: 'graphml:Key',
            id: 'd1',
            for: 'edge',
            'attr.name': 'weight',
            'attr.type': 'double'
          }
        ]);

        expect(result.rootElements).to.jsonEqual([
          {
            $type: 'graphml:Graph',
            id: 'G',
            edgedefault: 'undirected',
            nodes: [
              {
                $type: 'graphml:Node',
                id: 'n0',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd0',
                    value: 'green'
                  }
                ]
              },
              {
                $type: 'graphml:Node',
                id: 'n1'
              },
              {
                $type: 'graphml:Node',
                id: 'n2',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd0',
                    value: 'blue'
                  }
                ]
              },
              {
                $type: 'graphml:Node',
                id: 'n3',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd0',
                    value: 'red'
                  }
                ]
              },
              {
                $type: 'graphml:Node',
                id: 'n4'
              },
              {
                $type: 'graphml:Node',
                id: 'n5',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd0',
                    value: 'turquoise'
                  }
                ]
              }
            ],
            edges: [
              {
                $type: 'graphml:Edge',
                id: 'e0',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd1',
                    value: '1.0'
                  }
                ]
              },
              {
                $type: 'graphml:Edge',
                id: 'e1',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd1',
                    value: '1.0'
                  }
                ]
              },
              {
                $type: 'graphml:Edge',
                id: 'e2',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd1',
                    value: '2.0'
                  }
                ]
              },
              {
                $type: 'graphml:Edge',
                id: 'e3'
              },
              {
                $type: 'graphml:Edge',
                id: 'e4'
              },
              {
                $type: 'graphml:Edge',
                id: 'e5'
              },
              {
                $type: 'graphml:Edge',
                id: 'e6',
                data: [
                  {
                    $type: 'graphml:Data',
                    key: 'd1',
                    value: '1.1'
                  }
                ]
              }
            ]
          }
        ]);

        done(err);
      });
    });

  });


  describe('should import parts', function() {

    it('graphml:Graph', function(done) {

      // when
      fromFile('test/fixtures/graphml/graph.part.graphml', 'graphml:Graph', function(err, result) {

        // assume
        expect(err).not.to.exist;

        // then
        expect(result).to.jsonEqual({
          $type: 'graphml:Graph',
          id: 'G',
          edgedefault: 'undirected'
        });

        done(err);
      });

    });

  });

});