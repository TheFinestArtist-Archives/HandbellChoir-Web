if (typeof NotesUtil === 'undefined') NotesUtil = {};
var notes = [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" ];
var noteMap = {};
var noteNumMap = [];

for(var i = 0; i < 127; i++) {
  var note = notes[i % 12],
    octave = ((i / 12) | 0) - 1; // MIDI scale starts at octave = -1
  var key = note + octave;
  noteMap[key] = i;
  noteNumMap[i] = key;
}

NotesUtil.nameToNum = function(name) {
  return noteMap[name];
};
NotesUtil.numToFreq = function(note) {
  return 440.0 * Math.pow(2, (note - 69.0) / 12.0);
};
NotesUtil.numToName = function(note) {
  return noteNumMap[note];
};
NotesUtil.freqToNum = function(f) {
  return Math.round(12.0 * getBaseLog(f / 440.0, 2) + 69);
};
