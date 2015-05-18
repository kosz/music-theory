var R = require('ramda');
var intervals = require('./intervals.js');

// http://en.wikipedia.org/wiki/Chord_%28music%29

var chords = {
  major: ['major third', 'perfect fifth'],
  minor: ['minor third', 'perfect fifth'],
  augmented: ['major third', 'minor sixth'],
  diminished: ['minor third', 'diminished fifth']
};

R.keys(chords).forEach(function(chord) {
  exports[chord] = function (tonic) {
    return [
      tonic,
      intervals[chords[chord][0]](tonic),
      intervals[chords[chord][1]](tonic)
    ];
  };
});
