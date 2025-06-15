function renderNotesToStaff(containerId, voicesData, options) {
    var scale = (options && options.scale) || 1.0;

  // Configuration (using base dimensions that will be scaled)
    var baseStaveWidth = 200;
    var baseStaveHeight = 100;
    
  
    // Clear the container
    var container = document.getElementById(containerId);
    container.innerHTML = "";
    
    // Create VexFlow renderer
    var renderer = new Vex.Flow.Renderer(container, Vex.Flow.Renderer.Backends.SVG);
    
    // Configuration
    var staveWidth = 200;
    var staveHeight = 100;
    var beatsPerMeasure = 4;
    var totalVoices = voicesData.length;
    
    // Group each voice"s notes into measures
    var voicesMeasures = [];
    for (var i = 0; i < totalVoices; i++) {
      voicesMeasures.push(groupNotesIntoMeasures(voicesData[i], beatsPerMeasure));
    }
    
    // Determine the maximum number of measures across all voices
    var maxMeasures = 0;
    for (var i = 0; i < voicesMeasures.length; i++) {
      maxMeasures = Math.max(maxMeasures, voicesMeasures[i].length);
    }
    
    // Calculate dimensions
    var totalWidth = maxMeasures * baseStaveWidth * scale;
    var totalHeight = baseStaveHeight * 2 * scale; // Two staves high, scaled

    // Resize renderer to final pixel size
    renderer.resize(totalWidth, totalHeight);
    var context = renderer.getContext();
    
    // Scale the entire drawing context. All subsequent drawing calls will be scaled up.
    context.scale(scale, scale);
    
    // For each measure...
    for (var measureIndex = 0; measureIndex < maxMeasures; measureIndex++) {
      var x = measureIndex * staveWidth;
      
      // Create treble clef stave
      var trebleStave = new Vex.Flow.Stave(x, 0, staveWidth);
      if (measureIndex === 0) {
        trebleStave.addClef("treble");
        trebleStave.addTimeSignature(beatsPerMeasure + "/4");
      }
      trebleStave.setEndBarType(Vex.Flow.Barline.type.SINGLE);
      trebleStave.setContext(context).draw();
      
      // Create bass clef stave
      var bassStave = new Vex.Flow.Stave(x, staveHeight, staveWidth);
      if (measureIndex === 0) {
        bassStave.addClef("bass");
        bassStave.addTimeSignature(beatsPerMeasure + "/4");
      }
      bassStave.setEndBarType(Vex.Flow.Barline.type.SINGLE);
      bassStave.setContext(context).draw();
      
      // Create voices for treble clef
      var trebleVoices = [];
      var bassVoices = [];
      
      // For each voice...
      for (var voiceIndex = 0; voiceIndex < totalVoices; voiceIndex++) {
        // Skip this voice if it doesn"t have this measure
        if (measureIndex >= voicesMeasures[voiceIndex].length) continue;
        
        var voiceMeasure = voicesMeasures[voiceIndex][measureIndex];
        if (voiceMeasure.length === 0) continue;
        
        // Determine if this voice should be in treble or bass clef
        // Using a simple heuristic based on the voice index
        var clef = voiceIndex < totalVoices / 2 ? "treble" : "bass";
        
        var staveNotes = createStaveNotes(voiceMeasure, clef); // Pass clef to createStaveNotes
        
        var voice = new Vex.Flow.Voice({
          num_beats: beatsPerMeasure,
          beat_value: 4
        });
        voice.setStrict(false);
        
        voice.addTickables(staveNotes);
        
        if (clef === "treble") {
          trebleVoices.push(voice);
        } else {
          bassVoices.push(voice);
        }
      }
      
      // Format and draw treble voices
      var margin = 20;
      if (trebleVoices.length > 0) {
        var trebleFormatter = new Vex.Flow.Formatter().joinVoices(trebleVoices);
        var trebleWidth = trebleStave.getNoteEndX() - trebleStave.getNoteStartX() - margin;
        trebleFormatter.format(trebleVoices, trebleWidth);
        
        for (var i = 0; i < trebleVoices.length; i++) {
          trebleVoices[i].draw(context, trebleStave);
        }
      }
      
      // Format and draw bass voices
      if (bassVoices.length > 0) {
        var bassFormatter = new Vex.Flow.Formatter().joinVoices(bassVoices);
        var bassWidth = bassStave.getNoteEndX() - bassStave.getNoteStartX() - margin;
        bassFormatter.format(bassVoices, bassWidth);
        
        for (var i = 0; i < bassVoices.length; i++) {
          bassVoices[i].draw(context, bassStave);
        }
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
            data: ["rest"],
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
          data: ["rest"],
          beat: remainingBeats
        });
      }
      measures.push(currentMeasure);
    }
    
    return measures;
  }
  
  function createStaveNotes(measureNotes, clef) {
    var staveNotes = [];
    clef = clef || "treble"; // Default to treble clef
    
    for (var i = 0; i < measureNotes.length; i++) {
      var noteData = measureNotes[i];
      var staveNote;
      
      if (noteData.data[0] === "rest") {
        if(clef === "treble") {
            staveNote = new Vex.Flow.StaveNote({
                keys: ["d/5"],  // For treble clef
                duration: beatsToVexFlowDuration(noteData.beat) + "r",
                clef: clef
            });
        } else {

            staveNote = new Vex.Flow.StaveNote({
                keys: ["d/3"],  // For treble clef
                duration: beatsToVexFlowDuration(noteData.beat) + "r",
                clef: clef
            });
        }
      } else {
        // Convert note number to VexFlow format (e.g., 60 to "c/4")
        var noteInfo = getNoteInfo(noteData.data[0]);
        var vexFlowKey = convertNoteToVexFlow(noteInfo);
        
        staveNote = new Vex.Flow.StaveNote({
          keys: [vexFlowKey],
          duration: beatsToVexFlowDuration(noteData.beat),
          clef: clef  // Set the clef for proper rendering
        });
        
        // Add dot if needed
        var durationInBeats = noteData.beat;
        if (
          durationInBeats === 1.5 ||   // dotted quarter
          durationInBeats === 0.75 ||  // dotted eighth
          durationInBeats === 3 ||     // dotted half
          durationInBeats === 0.375    // dotted sixteenth
        ) {
            var dot = new Vex.Flow.Dot(); // Creates a dot
            dot.setNote(staveNote);         // Attach to the note
            dot.setIndex(0);                // Apply to first note head
            staveNote.addModifier(dot);  // Add modifier to note
        }
        
        if (noteInfo.accidental === "#") {
          staveNote.addAccidental(0, new Vex.Flow.Accidental("#"));
        } else if (noteInfo.accidental === "b") {
          staveNote.addAccidental(0, new Vex.Flow.Accidental("b"));
        }
      }
      
      staveNotes.push(staveNote);
    }
    
    return staveNotes;
  }
  
  function convertNoteToVexFlow(note) {
    // Convert from scientific notation (C4) to VexFlow format (c/4)
    var noteName = note.charAt(0).toLowerCase();
    var accidental = "";
    var octave = "";
    
    for (var i = 1; i < note.length; i++) {
      var char = note.charAt(i);
      if (char === "#" || char === "b") {
        accidental += char;
      } else if (!isNaN(char)) {
        octave += char;
      }
    }
    
    return noteName + accidental + "/" + octave;
  }
  function beatsToVexFlowDuration(ratio) {
    var beats = ratio;
    // Dotted whole note (6 beats)
    if (beats >= 6) return "wd";
    // Whole note (4 beats)
    if (beats >= 4) return "w";
    // Dotted half note (3 beats)
    if (beats >= 3) return "hd";
    // Half note (2 beats)
    if (beats >= 2) return "h";
    // Dotted quarter note (1.5 beats)
    if (beats >= 1.5) return "qd";
    // Quarter note (1 beat)
    if (beats >= 1) return "q";
    // Dotted eighth note (0.75 beats)
    if (beats >= 0.75) return "8d";
    // Eighth note (0.5 beats)
    if (beats >= 0.5) return "8";
    // Dotted sixteenth note (0.375 beats)
    if (beats >= 0.375) return "16d";
    // Sixteenth note (0.25 beats)
    if (beats >= 0.25) return "16";
    // Thirty-second note (0.125 beats)
    return "32";
  }
  
  
//   renderNotesToStaff("staff", notes);

// renderNotesToStaff("staff", midi, {scale: 3});