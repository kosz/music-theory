var chai = require('chai');
var expect = chai.expect;

var theory = require('./theory.js');

describe('theory', function() {
  it('can give an interval relative to a starting note', function (){
    expect(theory.perfectUnison(1)).to.equal(1);
    expect(theory.minorSecond(1)).to.equal(2);
    expect(theory.majorSeventh(10)).to.equal(21);
  });
  it('can give the name of a note based on it`s position', function (){
    expect(theory.getNoteName(0)).to.equal('C');
    expect(theory.getNoteName(83)).to.equal('B');
  });
  it('can calculate chords', function () {
    expect(theory.major(0)).to.equal([0, 4, 7]);
  });
});
