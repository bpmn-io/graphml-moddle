import expect from './expect';

import SchemaValidator from 'xsd-schema-validator';

const SCHEMA_FILE = 'resources/graphml/xsd/graphml.xsd';

import {
  readFile
} from './helper';


export function fromFile(moddle, file, done) {
  var fileContents = readFile(file);

  moddle.fromXML(fileContents, 'graphml:Graphml', done);
}

export function toXML(element, opts, done) {
  element.$model.toXML(element, opts, done);
}

export function validate(err, xml, done) {

  if (err) {
    return done(err);
  }

  if (!xml) {
    return done(new Error('XML is not defined'));
  }

  SchemaValidator.validateXML(xml, SCHEMA_FILE, function(err, result) {

    if (err) {
      return done(err);
    }

    expect(result.valid).to.be.true;
    done();
  });
}