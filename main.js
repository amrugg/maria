var page = document.getElementById("page");
var noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var midi = [{"deltaTime":0,"type":9,"channel":0,"data":[64,96],"trueTime":0,"trueBeat":0,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":480,"trueBeat":1,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":960,"trueBeat":2,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":1440,"trueBeat":3,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":1920,"trueBeat":4,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":2400,"trueBeat":5,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":2880,"trueBeat":6,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":3360,"trueBeat":7,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":3840,"trueBeat":8,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":4320,"trueBeat":9,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":4800,"trueBeat":10,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":5280,"trueBeat":11,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":5760,"trueBeat":12,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":6480,"trueBeat":13.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":6720,"trueBeat":14,"beat":2},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":7680,"trueBeat":16,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":8160,"trueBeat":17,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":8640,"trueBeat":18,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":9120,"trueBeat":19,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":9600,"trueBeat":20,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":10080,"trueBeat":21,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":10560,"trueBeat":22,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":11040,"trueBeat":23,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":11520,"trueBeat":24,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":12000,"trueBeat":25,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":12480,"trueBeat":26,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":12960,"trueBeat":27,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":13440,"trueBeat":28,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":14160,"trueBeat":29.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":14400,"trueBeat":30,"beat":2},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":15360,"trueBeat":32,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":15840,"trueBeat":33,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":16320,"trueBeat":34,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":16800,"trueBeat":35,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":17280,"trueBeat":36,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":17760,"trueBeat":37,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":18000,"trueBeat":37.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":18240,"trueBeat":38,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":18720,"trueBeat":39,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":19200,"trueBeat":40,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":19680,"trueBeat":41,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":19920,"trueBeat":41.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":20160,"trueBeat":42,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":20640,"trueBeat":43,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":21120,"trueBeat":44,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":21600,"trueBeat":45,"beat":1},{"deltaTime":22080,"type":9,"channel":0,"data":[55,96],"trueTime":22080,"trueBeat":46,"beat":2},{"deltaTime":961,"type":9,"channel":0,"data":[64,96],"trueTime":23040,"trueBeat":48,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":23520,"trueBeat":49,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":24000,"trueBeat":50,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":24480,"trueBeat":51,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[67,96],"trueTime":24960,"trueBeat":52,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[65,96],"trueTime":25440,"trueBeat":53,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":25920,"trueBeat":54,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":26400,"trueBeat":55,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":26880,"trueBeat":56,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":27360,"trueBeat":57,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":27840,"trueBeat":58,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[64,96],"trueTime":28320,"trueBeat":59,"beat":1},{"deltaTime":1,"type":9,"channel":0,"data":[62,96],"trueTime":28800,"trueBeat":60,"beat":1.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":29520,"trueBeat":61.5,"beat":0.5},{"deltaTime":1,"type":9,"channel":0,"data":[60,96],"trueTime":29760,"trueBeat":62,"beat":2}];
var midiWhole = [];
var event = makeEvents();
var sfx = {};
loadSfx();
var activeNotes = {};
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var pianoPlayer = null;
var gameMode = "menu";
var freePlay = true;
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
        // console.log(message);
        console.log("noteDown");
        event.emit("noteDown", {num: noteNumber, vel: velocity});
        if(freePlay) {
            playPianoNote(noteNumber, velocity);
        }
    }
    // Note off (or note on with velocity 0)
    else if (command === 8 || (command === 9 && velocity === 0)) {
        var noteInfo = getNoteInfo(noteNumber);
        var message = "Key released: " + noteInfo + " (MIDI note " + noteNumber + ")";
        // console.log(message);
        event.emit("noteUp", {num: noteNumber});
        if(freePlay) {
            releasePianoNote(noteNumber);
        }
    }
}
var pianoVol = 5;
function playPianoNote(midiNumber, velocity, secs = 10) {
    if (!pianoPlayer) {
        console.warn("Piano not yet loaded.");
        return;
    }
    var noteName = getNoteInfo(midiNumber);
    // velocity [0–127] → gain [0–1]
    var gain = (velocity / 127) * pianoVol + 0.2; 
    // play for 1 second by default
    var src = pianoPlayer.play(noteName, audioCtx.currentTime, {
        gain: gain,
        duration: secs  // plenty of time; we"ll cut it off
    });
    // console.log("Playing", noteName, "vel", velocity);
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

function rhythmAnim(data) {
    if(data.score === "great") {
        animGreat(data.note.hazard);
    } else if(data.score === "good") {
        animGood(data.note.hazard);
    } else {
        animBad(data.note.hazard);
    }
}
function startRhythmGame(song) {
    gameMode = "rhythm";
    freePlay = false;
    makeSong(song, 20, false).style.bottom = "20px";
    event.on("noteHit", rhythmAnim);
    loadRhythmGame(midi, beatTime);
    startTime = Date.now() + beatTime * downBeats;
    beginListening({matchNote: false, cb: function(score, note) {
        event.emit("jump", {score: score, note: note})
    }});

    event.on("tick", checkForMissedRhythm);
    var int = setInterval(function() {
        if(beat === 0) {
            sfx.met1.play();
        } else {
            sfx.met.play();
        }
        beat = (beat+1)%timeSig;
    }, beatTime);
    scheduleEnd(endRhythmGame);

    event.on("gameEnd", function() {
        event.off("noteHit", rhythmAnim);
        event.off("tick", checkForMissedRhythm);
        clearInterval(int);

    });
};
function checkForMissedRhythm() {
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    midi.melody.forEach(function(note) {
        if(!note.played && note.trueBeat < curBeat - 0.5) {
            note.played = true;
            event.emit("noteMissed");
        }
    });
    midi.harmony.forEach(function(note) {
        if(!note.played && note.trueBeat <= curBeat) {
            note.played = true;
            playPianoNote(note.data[0], note.data[1], note.beat * beatTime / 1000);
        }
    });
}
function checkForMissedWhole() {
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    midiWhole.forEach(function(note) {
        if(!note.played && note.trueBeat < curBeat - 0.5) {
            note.played = true;
            event.emit("noteMissed");
        }
    });
}
function scheduleEnd(end) {
    setTimeout(end, (midiWhole.at(-1).trueBeat + midiWhole.at(-1).beat + 8) * beatTime);
}
function endRhythmGame() {
    if(Date.now() - startTime < midiWhole.at(-1).trueBeat * beatTime) {
        return scheduleEnd(endRhythmGame);
    }
    event.emit("sceneEnd");
}
function endSongPlay() {
    debugger
    if(Date.now() - startTime < midiWhole.at(-1).trueBeat * beatTime) {
        return scheduleEnd(endSongPlay);
    }
    event.emit("sceneEnd");
}
function endStaffGame() {
    if(Date.now() - startTime < midiWhole.at(-1).trueBeat * beatTime) {
        return scheduleEnd(endStaffGame);
    }
    event.emit("sceneEnd");
}
function startSongPlay(song) {

    event.on("tick", checkForMissedWhole);
    makeSong(song, 50, true).style.top = innerWidth/4 + "px";
    loadStarFX();
    startTime = Date.now() + beatTime * downBeats;
    beginListening({matchNote: true, cb: function(score, note) {
        event.emit("stars", {score: score, note: note});
    }});

    var int = setInterval(function() {
        if(beat === 0) {
            sfx.met1.play();
        } else {
            sfx.met.play();
        }
        beat = (beat+1)%timeSig;
    }, beatTime);

    event.on("gameEnd", function() {
        event.off("tick", checkForMissedWhole);
        clearInterval(int);
    });
    scheduleEnd(endSongPlay);
};
var staffProps = {
    offset1: 9.5,
    gap: 6.6,
    offset2: 76,
    scale: 1
}

function startStaffGame() {
    freePlay = true;
    startTime = Date.now() + beatTime * downBeats;
    var staff = cde("img.staff", {src: baseDir + "sprites/staff.svg", style: {height: "90%", zIndex: 0}});
    page.appendChild(staff);
    staffProps.scale = staff.clientHeight/staff.naturalHeight;
    loadStaffGame(midiWhole, staffProps, beatTime);
    scheduleEnd(endStaffGame);
    event.once("gameEnd", function() {
        staff.remove();
    })
}

var startTime = 0;
var beatTime = 500;
var downBeats = 5;

function listen(e) {
    judgeNote(e, listen.options);
}
function beginListening(options) {
    listen.options = options;
    event.on("noteDown", listen);
    event.on("gameEnd", endListening);
}
function endListening() {
    event.off("noteDown", listen);
}
function makeSong(song, scale = 20, addVbl) {
    var vblOffset = 100;
    var staff = {
        offset: 67.5,
        dist: 32.76,
        scale: 1,
    };
    var staffEl = cde("img.staff", {src: baseDir + "sheets/" + song + ".svg"});
    page.appendChild(staffEl);
    if(scale) {
        staffEl.style.height = scale + "%";
    }
    event.on("tick", function() {
        if(staff.scale === 1 || staff.scale === Infinity) {
            staff.scale = staffEl.offsetHeight/staffEl.naturalHeight;
        }
        var curTime = Date.now() - startTime;
        var x = (-(curTime /beatTime) * staff.dist - staff.offset) * staff.scale + vblOffset;
        staffEl.style.transform = "translateX("+x+"px)";
    });
    if(addVbl) {
        /// vbl stands for vertical blue line
        var vbl = cde("div.vbl", {style: {left: vblOffset + "px"}});
        page.appendChild(vbl);
    }
    event.once("gameEnd", function() {
        if(vbl) {
            vbl.remove();
        }
        staffEl.remove();
    });
    return staffEl;
}
function judgeNote(e, options) {
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    if(options.matchNote) {
        var note = findClosestNote(e.num, curBeat, midiWhole);
    } else {
        var note = findClosestNote(false, curBeat, midi.melody);
    }
    if(note) {
        note.played = true;
        var diff = Math.abs(note.trueBeat - curBeat)
        var dispEl = cde("div")
        page.appendChild(dispEl);
        var score = "bad";
        if(diff < 0.1 * (500/beatTime)) {
            console.log("Great", diff);
            score = "great";
        } else if(diff < 0.2 * (500/beatTime)) {
            console.log("good", diff);
            score = "good";
        } else {
            console.log("bad", diff);
        }
        if(options.cb) {
            options.cb(score, note);
        }
        // console.log("Played Note", ...note.data, note.beat * beatTime / 1000);
        if(gameMode !== "play") {
            playPianoNote(note.data[0], note.data[1], note.beat * beatTime / 1000);
        }

        event.emit("noteHit", {note, score});
    }
}
function findClosestNote(noteId, targetBeat, midi) {
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
var scores = ["Mary Had a Little Lamb", "Joyful, Joyful, We Adore Thee", "Twinkle, Twinkle, Little Star", "Brother John", "Hey, Diddle Diddle", "Row, Row, Row Your Boat", "Old MacDonald Had a Farm",  "Replacement Ben", "All Things Bright And Beautiful", "What a Friend We Have In Jesus", "Minuet in G", "Symphony of Fate",];
function loadPage() {
    loadMenu();
}
var games = {
    "Rhythm": startRhythmGame,
    "Staff": startStaffGame,
    "Master": startSongPlay
}

function loadMenu(data) {
    function loadPanel(song, data) {
        activePanel.textContent = "";
        if(data) {
            activePanel.appendChild(cde("h2", {t: "You earned " + data.level + " stars!"}));
        } else {
            activePanel.appendChild(cde("h2", {t: song}));
        }
        var modes = ["Rhythm", "Staff", "Master"];
        var colors = ["green", "red", "blue"];
        var keys = ["C", "E", "G"];
        for(var i = 0; i < modes.length; i++) {
            var starHolder = cde("div.starHolder");
            var button = cde("button.panel-button " + colors[i] + "-button", [
                modes[i] + " (" + keys[i] + ")",
                starHolder
            ]);
            var prof = Number(localStorage.getItem(song + "-" + modes[i]));
            for(var j = 0; j < 3; j++) {
                starHolder.appendChild(cde("img" + (prof > j ? "" : ".empty"), {src: baseDir + "sprites/star.png"}));
            }
            activePanel.appendChild(button);
            let mode = modes[i];
            button.addEventListener("click", function() {
                chooseSong(song, mode);
            });
        }
    }
    function chooseSong(song, mode) {
        activePanel.classList.add("hide");
        songContainer.classList.add("hide");
        setTimeout(function(){
            activePanel.remove();
            songContainer.remove();
            playSong(song, mode);
        }, 300);
        event.off("noteDown", midiMenu);
    }
    var songSelected = false;
    var activePanel = cde("div.panel hide");
    page.appendChild(activePanel);
    gameMode = "menu";
    freePlay = true;
    var songContainer = cde("div.songContainer");
    var items = [];
    var currentIndex = 0;
    page.appendChild(songContainer);
    scores.forEach(function(song, i) {
        var item = cde("div.song-item",
            [
                cde("h2", {t: song}),
            ]
        );
        items.push(item);
        if(Math.floor(scores.length/2) === i) {
            currentIndex = i;
        }
        songContainer.appendChild(item);
    });
    if(!data) {
        centerItem(currentIndex);
        items[currentIndex].classList.add("selected");
    } else {
        var key = activeSong.song + "-" + activeSong.mode;
        var lastConfig = localStorage.getItem(key);
        if(lastConfig < data.level) {
            localStorage.setItem(key, data.level);
        }
        for(var i = 0; i < scores.length; i++) {
            if(scores[i] === activeSong.song) {
                currentIndex = i;
                break;
            }
        }
        centerItem(currentIndex);
        items[currentIndex].classList.add("selected");
        setTimeout(selectSong, 100, data)
    }
    addEventListener("keydown", function(e) {
        if(gameMode !== "menu") return;

        if(e.key === "ArrowRight") {
            selectRight();
        } else if(e.key === "ArrowLeft") {
            selectLeft();
        } else if(e.key === " ") {
            toggleCurrentItem();
        }
    });
    var diffs = [1, -1,1,-2,-2];
    var playedDiffs = [];
    var lastNote = 60;
    var dir = 0;
    function midiMenu(note) {
        if(songSelected) {
            var noteInfo = getNoteInfo(note.num);
            if(noteInfo[0] === "C") {
                chooseSong(scores[currentIndex], "Rhythm");
            } else if(noteInfo[0] === "E") {
                chooseSong(scores[currentIndex], "Staff");
            } else if(noteInfo[0] === "G") {
                chooseSong(scores[currentIndex], "Master");
            } else {
                deselectSong();
            }
        } else {
            if(note.num === lastNote) {
                selectSong();
            } else if(note.num < lastNote) {
                selectLeft();
                dir = -1;
            } else {
                selectRight();
                dir = 1;
            }
            playedDiffs.push(note.num - lastNote);
            while(playedDiffs.length > diffs.length) {
                playedDiffs.shift();
            }
            var match = true;
            diffs.forEach(function(diff,i) {
                if(diff !== playedDiffs[i]) {
                    match = false;
                }
            });
            console.log(playedDiffs);
            if(match) {
                scores.push("Canon in M.D");
                chooseSong("Canon in M.D", "Rhythm");
            }
            lastNote = note.num;
        }
    }
    event.on("noteDown", midiMenu);

    function selectLeft() {
        if (currentIndex > 0) {
            updateSelection(currentIndex - 1);

            centerItem(currentIndex);
        }
    }

    /**
     * Moves selection to the right and centers that item
     */
    function selectRight() {
        if (currentIndex < items.length - 1) {
            updateSelection(currentIndex + 1);
            centerItem(currentIndex);
        }
    }

    /**
     * Jumps to specific index and centers that item
     * @param {number} index - The index to select
     */
    function jumpTo(index) {
        if (index >= 0 && index < items.length) {
            updateSelection(index);
            centerItem(index);
        }
    }

    /**
     * Updates the selected class on items
     * @param {number} newIndex - The index to be selected
     */
    function updateSelection(newIndex) {
        // Remove previous selection
        items[currentIndex].classList.remove("selected");
        
        // Update current index
        currentIndex = newIndex;
        
        // Add new selection
        items[currentIndex].classList.add("selected");
    }
    function centerItem(index) {
        var item = items[index];

        // Calculate center position
        var containerWidth = songContainer.clientWidth;
        var itemWidth = item.offsetWidth;
        var gap = parseInt(window.getComputedStyle(songContainer).gap); // Get the gap from the container
        var itemMargin = gap; // Use the gap as the margin between items

        // Calculate the position where this item starts
        var itemPosition = 0;
        for (var i = 0; i < index; i++) {
            itemPosition += items[i].offsetWidth + itemMargin;
        }

        // Calculate position to center this item
        var scrollPosition = itemPosition - (containerWidth / 2) + (itemWidth / 2) + (innerWidth/2 );
        songContainer.style.setProperty("--song-x", -scrollPosition + "px");
    }
    function selectSong(data) {
        var song = scores[currentIndex];
        if(!songSelected) {
            songSelected = true;
            activePanel.classList.remove("hide");
            songContainer.classList.add("select-mode");
            loadPanel(song, data);
        }
    }
    function deselectSong() {
        if(songSelected) {
            songSelected = false;
            songContainer.classList.remove("select-mode");
            activePanel.classList.add("hide");
        }
    }
    function toggleCurrentItem(song) {
        if(songSelected) {
            deselectSong();
        } else {
            selectSong();
        }
    }
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
function playSong(song, mode) {
    var loading = 0;
    var maxLoad = 2;
    activeSong = {song, mode};
    getJson(baseDir + "music/" + song + ".json", function(err, json) {
        if(err) {
            console.error(err);
        } else {
            debugger
            midi = json;
            beatTime = 1000/ (midi.bpm/60) || 500;
            midiWhole = midi.melody.concat(midi.harmony);
            midiWhole.sort(function(a,b) {
                return a.trueBeat - b.trueBeat;
            })

            beat = midi.startBeat || 0;
            timeSig = midi.sig || 4;
            games[mode](song);
            event.once("gameEnd", function(data) {
                loadMenu(data);
            });
        }
    });
}
var baseDir;
if(window.location.href.includes("https://")) {
    baseDir = "/maria/"
} else {
    baseDir = "/"
}

var activeSong = {};
loadPage();