> This library exposes [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules). Use [esm](https://github.com/standard-things/esm) to consume it or a ES module aware transpiler such as Webpack, Rollup or Browserify + babelify to bundle it for the browser.


# graphml-moddle

[![Build Status](https://travis-ci.com/bpmn-io/graphml-moddle.svg?branch=master)](https://travis-ci.com/bpmn-io/graphml-moddle)

Read and write [GraphML 1.1](http://graphml.graphdrawing.org/) files in NodeJS and the browser.


## Usage

Get the library via [npm package](https://www.npmjs.org/package/graphml-moddle). Bundle it for the web using your favorite module bundler.

```javascript
import GraphmlModdle from 'graphml-moddle';

var moddle = new GraphmlModdle();

var modelXML = ...;

moddle.fromXML(modelXML, function(err, graphml) {

  // read graphs
  graphml.rootElements; // [ { $type: 'graphml:Graph', ... }, ... ]

  // read extensions
  graphml.extensions; // [ { $type: 'graphml:Key', ... }, ... ]

  // add a new graph
  const newGraph = moddle.create('graphml:Graph', {
    id: 'myGraph'
  });

  graphml.rootElements.push(newGraph);

  moddle.toXML(graphml, function(err, updatedXML) {

    // updatedXML contains new graph

  });

});
```


## Resources

* [Issues](./issues)
* [Examples](./test/spec/xml)


## Building the Project

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the test via

```
npm test
```

Perform a complete build of the library via

```
npm run all
```


## Related Projects

* [moddle](https://github.com/bpmn-io/moddle)
* [moddle-xml](https://github.com/bpmn-io/moddle-xml)


## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).
