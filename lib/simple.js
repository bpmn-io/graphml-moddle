import {
  assign
} from 'min-dash';

import GraphModdle from './graphml-moddle';

import GraphPackage from '../resources/graphml/json/graphml.json';

var packages = {
  graphml: GraphPackage
};

export default function(additionalPackages, options) {
  var pks = assign({}, packages, additionalPackages);

  return new GraphModdle(pks, options);
}