function renderNotesToStaff(containerId, notesData) {
    // Clear the container
    var container = document.getElementById(containerId);
    container.innerHTML = '';
    
    // Create VexFlow renderer
    var renderer = new Vex.Flow.Renderer(container, Vex.Flow.Renderer.Backends.SVG);
    
    // Configuration
    var staveWidth = 200;
    var staveHeight = 100;
    var beatsPerMeasure = 4;
    
    // Group notes into measures based on beat value
    var measures = groupNotesIntoMeasures(notesData, beatsPerMeasure);
    
    // Calculate dimensions
    // --- CHANGES HERE ---
    var totalStaves = measures.length;
    var totalWidth = totalStaves * staveWidth;  // Expand to full width for all staves
    var totalHeight = staveHeight;  // Only one line, so single height
    
    // Resize renderer
    renderer.resize(totalWidth, totalHeight);
    var context = renderer.getContext();
    
    // Render each measure
    for (var i = 0; i < measures.length; i++) {
        var x = i * staveWidth;  // --- CHANGE HERE: Sequential x-positioning
        var y = 0;  // --- CHANGE HERE: Always at y=0 (no vertical wrapping)
        
        // Create stave
        var stave = new Vex.Flow.Stave(x, y, staveWidth);
        
        // Add clef and time signature to first stave
        if (i === 0) {
        stave.addClef('treble');
        stave.addTimeSignature(beatsPerMeasure + '/4');
        }
        
        // Add bar line to end of each measure
        stave.setEndBarType(Vex.Flow.Barline.type.SINGLE);
        
        // Draw the stave
        stave.setContext(context).draw();
        
        // Create and render notes for this measure
        if (measures[i].length > 0) {
        var staveNotes = createStaveNotes(measures[i]);
        var voice = new Vex.Flow.Voice({
            num_beats: beatsPerMeasure,
            beat_value: 4
        }).setMode(Vex.Flow.Voice.Mode.SOFT);
        
        voice.addTickables(staveNotes);
        
        // Calculate the available width for formatting notes
        var formatWidth = stave.getNoteEndX() - stave.getNoteStartX() - 20;
        var formatter = new Vex.Flow.Formatter().joinVoices([voice]);
        formatter.format([voice], formatWidth);
        voice.draw(context, stave);
        }
    }
  }
  
  function groupNotesIntoMeasures(notesData, beatsPerMeasure) {
    var measures = [];
    var currentMeasure = [];
    var currentBeats = 0;
    
    for (var i = 0; i < notesData.length; i++) {
      var note = notesData[i];
      var noteBeats = note.beat;
        console.log(beatsToVexFlowDuration(noteBeats));
      // If adding this note would exceed measure capacity, start new measure
      if (currentBeats + noteBeats > beatsPerMeasure && currentMeasure.length > 0) {
        // Fill remaining beats with rests if needed
        var remainingBeats = beatsPerMeasure - currentBeats;
        if (remainingBeats > 0) {
          currentMeasure.push({
            data: ['rest'],
            beat: remainingBeats
          });
        }
        
        measures.push(currentMeasure);
        currentMeasure = [];
        currentBeats = 0;
      }
      
      currentMeasure.push(note);
      currentBeats += noteBeats;
      
      // If measure is exactly full, start new measure
      if (currentBeats >= beatsPerMeasure) {
        measures.push(currentMeasure);
        currentMeasure = [];
        currentBeats = 0;
      }
    }
    
    // Add final measure if it has notes
    if (currentMeasure.length > 0) {
      // Fill remaining beats with rests if needed
      var remainingBeats = beatsPerMeasure - currentBeats;
      if (remainingBeats > 0) {
        currentMeasure.push({
          data: ['rest'],
          beat: remainingBeats
        });
      }
      measures.push(currentMeasure);
    }
    
    return measures;
  }
  
  function createStaveNotes(measureNotes) {
    var staveNotes = [];
    
    for (var i = 0; i < measureNotes.length; i++) {
      var noteData = measureNotes[i];
      var staveNote;
      
      if (noteData.data[0] === 'rest') {
        staveNote = new Vex.Flow.StaveNote({
          keys: ['d/5'], // Placeholder key for rest
          duration: beatsToVexFlowDuration(noteData.beat) + 'r'
        });
      } else {
        // Convert note number to VexFlow format (e.g., 60 to 'c/4')
        var noteInfo = getNoteInfo(noteData.data[0]);
        var vexFlowKey = convertNoteToVexFlow(noteInfo);
        
        staveNote = new Vex.Flow.StaveNote({
          keys: [vexFlowKey],
          duration: beatsToVexFlowDuration(noteData.beat)
        });
        
        // Add accidentals if needed
        if (noteInfo.accidental === '#') {
          staveNote.addAccidental(0, new Vex.Flow.Accidental('#'));
        } else if (noteInfo.accidental === 'b') {
          staveNote.addAccidental(0, new Vex.Flow.Accidental('b'));
        }
        if ([6, 3, 1.5, 0.75, 0.375].includes(noteData.beat)) {
            var dot = new Vex.Flow.Dot();
            dot.setNote(staveNote);

            // Add the dot to the note's modifiers
            staveNote.addModifier(dot, 0);
        }
      }
      
      staveNotes.push(staveNote);
    }
    
    return staveNotes;
  }
  
  function convertNoteToVexFlow(note) {
    // Convert from scientific notation (C4) to VexFlow format (c/4)
    var noteName = note.charAt(0).toLowerCase();
    var accidental = '';
    var octave = '';
    
    for (var i = 1; i < note.length; i++) {
      var char = note.charAt(i);
      if (char === '#' || char === 'b') {
        accidental += char;
      } else if (!isNaN(char)) {
        octave += char;
      }
    }
    
    return noteName + accidental + '/' + octave;
  }
  function beatsToVexFlowDuration(ratio) {
    var beats = ratio;
    // Dotted whole note (6 beats)
    if (beats >= 6) return 'wd';
    // Whole note (4 beats)
    if (beats >= 4) return 'w';
    // Dotted half note (3 beats)
    if (beats >= 3) return 'hd';
    // Half note (2 beats)
    if (beats >= 2) return 'h';
    // Dotted quarter note (1.5 beats)
    if (beats >= 1.5) return 'qd';
    // Quarter note (1 beat)
    if (beats >= 1) return 'q';
    // Dotted eighth note (0.75 beats)
    if (beats >= 0.75) return '8d';
    // Eighth note (0.5 beats)
    if (beats >= 0.5) return '8';
    // Dotted sixteenth note (0.375 beats)
    if (beats >= 0.375) return '16d';
    // Sixteenth note (0.25 beats)
    if (beats >= 0.25) return '16';
    // Thirty-second note (0.125 beats)
    return '32';
  }
  
  
//   renderNotesToStaff('staff', notes);
renderNotesToStaff('staff', midi.slice(0,30));