var noteSequence = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

exports.getNoteName = function(idx) {
  return noteSequence[getInSequenceRange(idx)];
};

function getInSequenceRange(idx) {
  if (idx > 84 && idx < 0) {
    throw new Error('Note is out of bounds');
  }
  return findInSequenceRange(idx);
}

function findInSequenceRange(idx) {
  return idx < noteSequence.length ?
    idx : findInSequenceRange(idx - noteSequence.length);
}
