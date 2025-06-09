(function() {
    "use strict";
    // Note names for display
    var noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    var midi = [{"deltaTime":0,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":719,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":239,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":959,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":719,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":239,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":959,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":239,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":239,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":239,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":239,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":961,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[67,96]},{"deltaTime":479,"type":9,"channel":0,"data":[67,0]},{"deltaTime":1,"type":9,"channel":0,"data":[65,96]},{"deltaTime":479,"type":9,"channel":0,"data":[65,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":479,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":479,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[64,96]},{"deltaTime":479,"type":9,"channel":0,"data":[64,0]},{"deltaTime":1,"type":9,"channel":0,"data":[62,96]},{"deltaTime":719,"type":9,"channel":0,"data":[62,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":239,"type":9,"channel":0,"data":[60,0]},{"deltaTime":1,"type":9,"channel":0,"data":[60,96]},{"deltaTime":959,"type":9,"channel":0,"data":[60,0]},{"deltaTime":22080,"type":9,"channel":0,"data":[55,96]},{"deltaTime":959,"type":9,"channel":0,"data":[55,0]}];
    
    function getNoteInfo(noteNumber) {
        var octave = Math.floor(noteNumber / 12) - 1;
        var noteIndex = noteNumber % 12;
        return noteNames[noteIndex] + octave;
    }
    
    
    function onMIDIMessage(event) {
        var data = event.data;
        var command = data[0] >> 4;
        var channel = data[0] & 0xf;
        var noteNumber = data[1];
        var velocity = data[2];
        
        // Note on
        if (command === 9 && velocity > 0) {
            var noteInfo = getNoteInfo(noteNumber);
            var message = "Key pressed: " + noteInfo + " (MIDI note " + noteNumber + "), velocity: " + velocity;
            console.log(message);
            playPianoNote(noteNumber, velocity);
        }
        // Note off (or note on with velocity 0)
        else if (command === 8 || (command === 9 && velocity === 0)) {
            var noteInfo = getNoteInfo(noteNumber);
            var message = "Key released: " + noteInfo + " (MIDI note " + noteNumber + ")";
            console.log(message);
            releasePianoNote(noteNumber);
        }
    }
    var activeNotes = {};
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    var pianoPlayer = null;
    Soundfont.instrument(audioCtx, "acoustic_grand_piano")
    .then(function(player){
        pianoPlayer = player;
        console.log("Piano loaded! 🎹");
        playMidi();
    })
    .catch(function(err){
        console.error("Failed to load piano:", err);
    });
    var i = -1;
    function playMidi() {
        ++i;
        while(midi[i].type !== 9) {
            ++i;
        }
        var note = midi[i];
        if(note.data[1] === 0) {
            releasePianoNote(note.data[1]);
        } else {
            playPianoNote(note.data[0], note.data[1]);
        }
        setTimeout(playMidi, note.deltaTime);
    }
    function playPianoNote(midiNumber, velocity) {
        if (!pianoPlayer) {
            console.warn("Piano not yet loaded.");
            return;
        }
        var noteName = getNoteInfo(midiNumber);
        // velocity [0–127] → gain [0–1]
        var gain = (velocity / 127) * 0.8 + 0.2; 
        // play for 1 second by default
        var src = pianoPlayer.play(noteName, audioCtx.currentTime, {
            gain: gain,
            duration: 10  // plenty of time; we"ll cut it off
        });
        console.log("Playing", noteName, "vel", velocity);
        activeNotes[midiNumber] = src;
    }
    function releasePianoNote(midiNumber) {
        var src = activeNotes[midiNumber];
        if (src) {
            try {
                // Stop almost immediately (you can add a small fade if you like)
                src.stop(audioCtx.currentTime + 0.02);
            }
            catch(e) {
                console.warn("Could not stop note", midiNumber, e);
            }
            delete activeNotes[midiNumber];
        }
    }
    
    function onMIDISuccess(midiAccess) {
        var inputs = midiAccess.inputs;
        var inputCount = 0;
        
        // ES5 compatible iteration
        var iterator = inputs.values();
        var input = iterator.next();
        
        while (!input.done) {
            input.value.onmidimessage = onMIDIMessage;
            inputCount++;
            console.log("MIDI input connected: " + input.value.name);
            input = iterator.next();
        }
        
        // Listen for new connections
        midiAccess.onstatechange = function(e) {
            if (e.port.type === "input") {
                if (e.port.state === "connected") {
                    e.port.onmidimessage = onMIDIMessage;
                    console.log("New MIDI device connected: " + e.port.name);
                } else if (e.port.state === "disconnected") {
                    console.log("MIDI device disconnected: " + e.port.name);
                }
            }
        };
    }
    
    function onMIDIFailure(error) {
        console.log("MIDI Error: " + error);
    }
    
    // Check for Web MIDI API support
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
            .then(onMIDISuccess, onMIDIFailure);
    } else {
        alert("Web MIDI API is not supported in this browser. Try Chrome, Edge, or Opera.");
    }
})(); 
