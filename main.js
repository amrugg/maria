var page = document.getElementById("page");
var noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var midi = [{"deltaTime":0,"type":9,"channel":0,"data":[64,96],"trueTime":0,"trueBeat":0,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":480,"trueBeat":1,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":960,"trueBeat":2,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":1440,"trueBeat":3,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":1920,"trueBeat":4,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":2400,"trueBeat":5,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":2880,"trueBeat":6,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":3360,"trueBeat":7,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":3840,"trueBeat":8,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":4320,"trueBeat":9,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":4800,"trueBeat":10,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":5280,"trueBeat":11,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":5760,"trueBeat":12,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":6480,"trueBeat":13.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":6720,"trueBeat":14,"beat":2},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":7680,"trueBeat":16,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":8160,"trueBeat":17,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":8640,"trueBeat":18,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":9120,"trueBeat":19,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":9600,"trueBeat":20,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":10080,"trueBeat":21,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":10560,"trueBeat":22,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":11040,"trueBeat":23,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":11520,"trueBeat":24,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":12000,"trueBeat":25,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":12480,"trueBeat":26,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":12960,"trueBeat":27,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":13440,"trueBeat":28,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":14160,"trueBeat":29.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":14400,"trueBeat":30,"beat":2},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":15360,"trueBeat":32,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":15840,"trueBeat":33,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":16320,"trueBeat":34,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":16800,"trueBeat":35,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":17280,"trueBeat":36,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":17760,"trueBeat":37,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":18000,"trueBeat":37.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":18240,"trueBeat":38,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":18720,"trueBeat":39,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":19200,"trueBeat":40,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":19680,"trueBeat":41,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":19920,"trueBeat":41.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":20160,"trueBeat":42,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":20640,"trueBeat":43,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":21120,"trueBeat":44,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":21600,"trueBeat":45,"beat":1},{"deltaTime":22080,"type":9,"channel":0,"data":[55,96],"trueTime":22080,"trueBeat":46,"beat":2},{"deltaTime":961,"type":9,"channel":0,"data":[64,96],"trueTime":23040,"trueBeat":48,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":23520,"trueBeat":49,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":24000,"trueBeat":50,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":24480,"trueBeat":51,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":24960,"trueBeat":52,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":25440,"trueBeat":53,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":25920,"trueBeat":54,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":26400,"trueBeat":55,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":26880,"trueBeat":56,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":27360,"trueBeat":57,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":27840,"trueBeat":58,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":28320,"trueBeat":59,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":28800,"trueBeat":60,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":29520,"trueBeat":61.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":29760,"trueBeat":62,"beat":2}];
var event = makeEvents();
var sfx = {};
loadSfx();
var activeNotes = {};
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var pianoPlayer = null;
Soundfont.instrument(audioCtx, "acoustic_grand_piano")
.then(function(player){
    pianoPlayer = player;
    console.log("Piano loaded! 🎹");
    // playMidi();
})
.catch(function(err){
    console.error("Failed to load piano:", err);
});
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
} else {
    alert("Web MIDI API is not supported in this browser. Try Chrome, Edge, or Opera.");
}
var beat = 0;
var timeSig = 4;

function getNoteInfo(noteNumber) {
    var octave = Math.floor(noteNumber / 12) - 1;
    var noteIndex = noteNumber % 12;
    return noteNames[noteIndex] + octave;
}
function onMIDIMessage(e) {
    var data = e.data;
    var command = data[0] >> 4;
    var channel = data[0] & 0xf;
    var noteNumber = data[1];
    var velocity = data[2];
    
    // Note on
    if (command === 9 && velocity > 0) {
        var noteInfo = getNoteInfo(noteNumber);
        var message = "Key pressed: " + noteInfo + " (MIDI note " + noteNumber + "), velocity: " + velocity;
        console.log(message);
        event.emit("noteDown", {num: noteNumber, vel: velocity});
        // playPianoNote(noteNumber, velocity);
    }
    // Note off (or note on with velocity 0)
    else if (command === 8 || (command === 9 && velocity === 0)) {
        var noteInfo = getNoteInfo(noteNumber);
        var message = "Key released: " + noteInfo + " (MIDI note " + noteNumber + ")";
        console.log(message);
        event.emit("noteUp", {num: noteNumber});
        releasePianoNote(noteNumber);
    }
}

var i = -1;
function playMidi() {
    ++i;
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

function startRhythmGame() {
    loadRhythmGame(beatTime);
    startTime = Date.now() + beatTime * downBeats;
    beginListening();

    var int = setInterval(function() {
        if(beat === 0) {
            sfx.met1.play();
        } else {
            sfx.met.play();
        }
        beat = (beat+1)%timeSig;
    }, beatTime);
};


var startTime = 0;
var beatTime = 500;
var downBeats = 9;
var staff = {
    offset: 67.5,
    dist: 32.76
};
function beginListening() {
    event.on("noteDown", judgeNote);
}
function makeSong(song) {
    var staffEl = cde("img", {src: "/sheets/" + song + ".svg"});
    page.appendChild(staffEl);
    event.on("tick", function(){
        var curTime = Date.now() - startTime;
        var x = staff.offset - (curTime /beatTime) * staff.dist;
        staffEl.style.transform = "translateX("+x+"px)";
    });
}
function judgeNote(e) {
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    var note = findClosestNote(false, curBeat);
    if(note) {
        note.played = true;
        var diff = Math.abs(note.trueBeat - curBeat)
        // var dispEl = cde("div")
        // page.appendChild(dispEl);
        // if(diff < 0.1) {
        //     dispEl.textContent = "Great!" + dispEl.textContent;
        // } else if(diff < 0.2) {
        //     dispEl.textContent = "Good" + dispEl.textContent;
        // } else {
        //     dispEl.textContent = "Bad" + dispEl.textContent;
        // }
        event.emit("noteHit", note.beat);
        playPianoNote(note.data[0], note.data[1]);
    }
}
function findClosestNote(noteId, targetBeat) {
    var closest = null;
    var smallestDiff = Infinity;
    
    for (var i = 0; i < midi.length; i++) {
        var note = midi[i];
        
        if (noteId && note.data[0] !== noteId) continue;
        if (note.played) continue;
      
        var diff = Math.abs(note.trueBeat - targetBeat);
        if (diff <= 0.5 && diff < smallestDiff) {
            smallestDiff = diff;
            closest = note;
        }
    }
    
    return closest || false;
}
function loadSfx() {
    sfx.met1 = new Howl({
        src: ["sounds/met1.mp3"],
        volume: 0.5,
    });
    sfx.met = new Howl({
        src: ["sounds/met.mp3"],
        volume: 0.5,
    });
}
var scores = ["Joyful, Joyful, We Adore Thee"];
function loadPage() {
    var songContainer = cde("div.songContainer");
    page.appendChild(songContainer);
    scores.forEach(function(song) {
        songContainer.appendChild(cde("button.song", 
            {t: song, onclick: function() {
                songContainer.remove();
                playSong(song);
            }}
        ))
    });
}
function getJson(url, cb, method, data)
{
    var req = new XMLHttpRequest();
    
    req.open(method || "GET", url);
    
    ///NOTE: If we set this to JSON, it will try to parse the post data, which we don't want.
    req.setRequestHeader("Content-Type", "application/octet-stream");
    
    req.send(data);
    
    req.onload = function ()
    {
        var contentType = req.getResponseHeader("Content-Type");
        var res;
        
        if (/^application\/json/i.test(contentType)) {
            try {
                res = JSON.parse(req.responseText);
            } catch (e) {}
        } else {
            ///TODO: Binary?
            res = req.responseText;
        }
        
        /* istanbul ignore if */
        if (req.status >= 400) {
            //cb({err: "request failed", status: req.status}, res);
            cb(res && res.err ? res : {err: "request failed", status: req.status}, res);
        } else {
            cb(null, res);
        }
    };
    /* istanbul ignore next */
    req.onerror = function (err)
    {
        cb({err: "network error", message: err});
    };
    
    cb = cb || function () {};
};
function playSong(song) {
    var loading = 0;
    var maxLoad = 2;
    
    makeSong(song);
    getJson("/music/" + song + ".json", function(err, json) {
        if(err) {
            console.error(err);
        } else {
            midi = json;
            startRhythmGame();
        }
    });
}
loadPage();