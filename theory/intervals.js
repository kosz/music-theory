var camelCase = require('camel-case');

// based on: http://en.wikipedia.org/wiki/Interval_%28music%29
var intervals = [
  'perfect unison',
  'minor second',
  'major second',
  'minor third',
  'major third',
  'perfect fourth',
  'diminished fifth',
  'perfect fifth',
  'minor sixth',
  'major sixth',
  'minor seventh',
  'major seventh',
  'perfect octave'
];

intervals.forEach(function(interval, idx) {
  exports[camelCase(interval)] =
    exports[interval] = 
      function(start) {
        return start + idx;
      };
});

