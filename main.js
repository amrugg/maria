(function() {
    "use strict";
    
    // Note names for display
    var noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    
    
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
        }
        // Note off (or note on with velocity 0)
        else if (command === 8 || (command === 9 && velocity === 0)) {
            var noteInfo = getNoteInfo(noteNumber);
            var message = "Key released: " + noteInfo + " (MIDI note " + noteNumber + ")";
            console.log(message);
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
