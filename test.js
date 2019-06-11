var assert = require('chai').assert;
var foo = 'bar';
var beverage = {
  tea:['chai', 'matcha', 'oolong']
};

//node can only support assert style

assert.typeOf(foo, 'string', 'foo is a string');
assert.equal(foo, 'bar', 'fool equal bar');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverage.tea, 3, 'beverages has 3 types of tea');

var expect = require('chai').expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverage).to.have.property('tea').with.length(3);

var should = require('chai').should();
foo.should.be.a('string');
foo.should.equal('bar');
