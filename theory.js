var R = require('ramda');

function inherit(object, mixin) {
  R.functionsIn(mixin).forEach(function(fun) {
    object[fun] = mixin[fun];
  });
}

inherit(exports, require('./theory/notes.js'));
inherit(exports, require('./theory/intervals.js'));
inherit(exports, require('./theory/chords.js'));
