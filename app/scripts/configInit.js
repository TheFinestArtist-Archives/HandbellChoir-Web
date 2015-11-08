var notes = new Firebase("https://handbellchoir.firebaseio.com/config/notes");
notes.set(MIDI.noteToKey);
