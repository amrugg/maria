PIXI.utils.skipHello();
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
var Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.Loader.shared,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Graphics = PIXI.Graphics;
var app = new Application({ 
    width: 800,
    height: 800,              
    antialias: true,
    transparent: true,
    resolution: 1
    }
);
app.renderer.backgroundAlpha = 0;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.pointerEvents = "none";
app.renderer.view.style.top = "0px";
app.renderer.view.style.zIndex = "102";
app.renderer.view.style.left = "0px";
/// Fill the screen 
app.renderer.resize(window.innerWidth, window.innerHeight);
addEventListener("resize", function(){
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
document.body.appendChild(app.view);
var spritesToLoad = ["Maria", "star", "projectile-fireball", "staff.svg"];
for(let i = 0; i < spritesToLoad.length; i++) {
    var spriteName = spritesToLoad[i];
    if(spriteName.includes(".")) {
        loader.add("sprites/" + spriteName);
    } else {
        loader.add("sprites/" + spriteName + ".png");
    }
}
loader.load(setup);
var state;
var keys = {};
var mouseX,mouseY;
function setup() {
    state = wait;
    app.ticker.add(delta => gameLoop(delta));
}
var maria;
var bottomY = innerHeight/2 - 50;
var hazardSpeed = 200; //pixels per sec
var hazards = [];
var stars = [];
function loadRhythmGame(midi, beatTime) {
    state = playRhythm;
    maria = createAnimatedSprite("Maria");
    var ghostStar = new Sprite(resources["sprites/star.png"].texture);
    app.stage.addChild(ghostStar);
    ghostStar.alpha = 0.5;
    ghostStar.tint = 0x000000;
    ghostStar.anchor.set(0.5);
    ghostStar.y = bottomY -maria.sprite.height/2-32;
    ghostStar.x = maria.sprite.width/2;
    spawnHazards(midi.melody, beatTime);
    maria.goto(maria.sprite.width/2, bottomY);
    maria.setAnim(1,4);
    maria.animation.speed = 7;
    event.on("jump", function(note) {
        if(maria.sprite.y === bottomY || true) {
            maria.vy = -30;
            maria.sprite.y--;
        } else {
            
        }
    });
    event.once("gameEnd", function() {
        state = wait;
        maria.destroy();
        app.stage.removeChild(ghostStar);
        hazards.forEach(function(haz) {
            app.stage.removeChild(haz);
        });
        hazards = [];
    });
}
function loadStaffGame() {
    state = playStaff;
    hazardSpeed = innerWidth/3;
    lastCheckedIndex = 0;
    event.on("noteDown", makeStar);
    event.once("gameEnd", function() {
        event.off("noteDown", makeStar);
        state = wait;
        stars.forEach(function(star) {
            app.stage.removeChild(star);
        });
        stars = [];
        hazards.forEach(function(haz) {
            app.stage.removeChild(haz);
        });
        hazards = [];
    })
}
function loadStarFX() {
    stars = [];
    state = playStars;
    event.on("stars", function(data) {
        makeStarFX(data);
    });
}
function makeStarFX(data) {
    if(data.score === "great") {
        for(var i = 0; i < 2; i++) {
            var star = new Sprite(resources["sprites/star.png"].texture);
            star.x = 50;
            star.y = 50;
            app.stage.addChild(star);
            star.vx = Math.random() * 50 - 25;
            star.vy = Math.random() * 5 - 10;
            stars.push(star);
        }
    }
}
function makeStar(note) {
    var num = note.num;
    var star = new Sprite(resources["sprites/star.png"].texture);
    star.anchor.set(0.5,0.5);
    star.x = -50;
    star.y = getNoteYPosition(num);
    star.x = 300;
    star.scale.set(1.5);
    // star.tint = 0xAA5555;
    // star.y = 300;
    star.note = num;
    app.stage.addChild(star);
    stars.push(star);
}
var lastCheckedIndex = 0;
function playStaff(dT) {
    var dTime = dT * 1/60;
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    checkForNewHazards(curBeat);
    hazards.forEach(function(hazard) {
        if(hazard.moving === false) return;
        console.log(hazard.note);
        hazard.x -= dTime * hazardSpeed;
    });
    stars.forEach(function(star,i) {
        if(star.moving === false) return;
        console.log(star.note);
        star.x += dTime * hazardSpeed * 3;
        star.rotation += 0.2;
        var col = checkHazardCol(star);
        if(col) {
            animGreat(star);
            star.moving = false;
            animBad(col);
            col.moving = false;
        }
        if(star.x > innerWidth + star.width) {
            stars.splice(i,1);
            app.stage.removeChild(star);
        }
    });
    renderAnims();
}

function playStars(dT) {
    var dTime = dT * 1/60;
    var curTime = Date.now() - startTime;
    var curBeat = curTime / beatTime;
    stars.forEach(function(star,i) {
        star.x += star.vx;
        star.vx *= 0.9;
        star.y += star.vy;
        star.vy += 0.7;
    });
    renderAnims();
}
            
function checkForNewHazards(curBeat) {
    for(var i = lastCheckedIndex; i < midiWhole.length; i++) {
        var note = midiWhole[i];
        if(note.trueBeat < curBeat) {
            ++lastCheckedIndex;
            spawnStaffHazard(note);
        } else {
            return;
        }
    }
}

function getNoteYPosition(noteNum) {
    var noteString = getNoteInfo(noteNum);
    console.log(noteString);
    
    var noteMap = {
        'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6
    };

    var match = noteString.match(/([A-G])(?:[b#])?(\d+)/);

    if (!match) {
        return null;
    }

    var noteLetter = match[1];
    var octave = parseInt(match[2], 10);

    var targetNoteIndex = noteMap[noteLetter];
    var targetStepValue = (octave * 7) + targetNoteIndex;

    // Define middle C step value for comparison
    var middleCStepValue = (4 * 7) + noteMap['C']; // C4

    if (targetStepValue < middleCStepValue) {
        // Use bass clef reference: A3 at staffProps.offset2
        var referenceNoteLetter = 'A';
        var referenceOctave = 3;
        var referenceYPosition = staffProps.offset2;
        --targetStepValue;
    } else {
        // Use treble clef reference: F5 at staffProps.offset1
        var referenceNoteLetter = 'F';
        var referenceOctave = 5;
        var referenceYPosition = staffProps.offset1;
    }

    var referenceNoteIndex = noteMap[referenceNoteLetter];
    var referenceStepValue = (referenceOctave * 7) + referenceNoteIndex;

    var yPosition = referenceYPosition + (referenceStepValue - targetStepValue) * staffProps.gap * 0.5;

    return yPosition * staffProps.scale;
}


function spawnStaffHazard(note) {
    var hazard = createAnimatedSprite("projectile-fireball", 144);
    app.stage.addChild(hazard.sprite);
    hazard.sprite.note = note.data[0];
    hazard.sprite.rotation = Math.PI/2;
    hazard.goto(innerWidth + hazard.sprite.width, getNoteYPosition(note.data[0]));
    hazard.setAnim(0,7);
    hazard.animation.speed = 7;
    hazards.push(hazard.sprite);
}
function spawnHazards(track, beatTime) {
    var beatCoe = hazardSpeed * beatTime / 1000;
    var offset = downBeats * beatCoe + maria.sprite.width/2;
    var doubleJumpOffset = 24;
    var doubleBeats = 0;
    for(var i = 0; i < track.length; i++) {
        var note = track[i];
        var hazard = new Sprite(resources["sprites/star.png"].texture);
        hazard.anchor.set(0.5);
        hazard.y = bottomY - maria.sprite.height/2 - 32 - doubleBeats * doubleJumpOffset;
        hazard.x = offset + beatCoe * note.trueBeat;
        if(note.beat <= 0.5) {
            // doubleBeats++;
        } else {
            // doubleBeats = Math.max(0, doubleBeats-1);
        }
        hazard.tint = 0xcccccc;
        note.hazard = hazard;
        app.stage.addChild(hazard);
        hazards.push(hazard);
    }
}
function animGreat(hazard) {
    hazard.tint = 0xffffff;
    function anim() {
        if(hazard.alpha <= 0) {
            app.stage.removeChild(hazard);
            event.off("tick", anim);
        } else {
            hazard.alpha -= 0.03;
            hazard.rotation += 0.1;
            hazard.scale.x += 0.1;
            hazard.scale.y += 0.1;
        }
    }
    event.on("tick", anim);
}
function animGood(hazard) {
    var tick = 0;
    hazard.tint = 0xffffff;
    function anim() {
        if(tick > 60) {
            app.stage.removeChild(hazard);
            event.off("tick", anim);
        } else {
            hazard.rotation += 2*Math.PI/60;
        }
    }
    event.on("tick", anim);
}
function animBad(hazard) {
    hazard.moving = false;
    hazard.vx = 5;
    hazard.vy = -10;
    function anim() {
        if(hazard.y > bottomY + 60) {
            app.stage.removeChild(hazard);
            event.off("tick", anim);
        } else {
            hazard.x += hazard.vx;
            hazard.vx *= 0.9;
            hazard.y += hazard.vy;
            hazard.vy += 0.7;
        }
    }
    event.on("tick", anim);
}
addEventListener("keypress", function(e) {
    event.emit("noteDown", {data: [getNoteNumber(e.code)]});
});
function getNoteNumber(keystrokeCode) {
    /// Testing feature
    // Mapping of keystroke codes to MIDI note numbers
    // Home row = white keys starting from middle C (60)
    // Top row = black keys (sharps/flats)
    var keyToNote = {
        // White keys (home row) - starting from middle C
        'KeyA': 60,  // C4 (Middle C)
        'KeyS': 62,  // D4
        'KeyD': 64,  // E4
        'KeyF': 65,  // F4
        'KeyG': 67,  // G4
        'KeyH': 69,  // A4
        'KeyJ': 71,  // B4
        'KeyK': 72,  // C5
        'KeyL': 74,  // D5
        
        // Black keys (top row)
        'KeyW': 61,  // C#4/Db4
        'KeyE': 63,  // D#4/Eb4
        'KeyT': 66,  // F#4/Gb4
        'KeyY': 68,  // G#4/Ab4
        'KeyU': 70,  // A#4/Bb4
        'KeyO': 73,  // C#5/Db5
        'KeyP': 75   // D#5/Eb5
    };
    
    // Return the note number or undefined if key not mapped
    return keyToNote[keystrokeCode];
}
function gameLoop(delta) {
    state(delta);
    event.emit("tick");
}
var animations = [];
function wait(){
    
}
var gravity = 5.6;
function playRhythm(dT){
    var dTime = dT * 1/60;
    renderAnims();
    if(maria.sprite.y < bottomY) {
       maria.sprite.y += maria.vy;
       maria.vy += gravity; 
    } else if(maria.sprite.y > bottomY) {
        maria.vy = 0;
        maria.sprite.y = bottomY;
    }
    hazards.forEach(function(hazard) {
        if(hazard.moving === false) return;
        hazard.x -= dTime * hazardSpeed;
    });
}
function checkHazardCol(star) {
    var len = hazards.length;
    for(var i = 0; i < len; i++) {
        var hazard = hazards[i];
        if(hazard.moving === false) continue;
        
        if(Math.abs(star.x - hazard.x) < hazard.width/2 && hazard.note === star.note) {
            return hazard;
        }
    }
    return false;
}
function renderAnims() {
    for(var i = 0; i < animations.length; i++) {
        var animation = animations[i];
        if(animation.paused) {
            continue;
        }
        if(animation.destroy) {
            animations.splice(i,1);
            --i;
            continue;
        }
        if(animation.frameCount%animation.speed === 0) {
            if(animation.x >= animation.length) {
                if(animation.destructive) {
                    animation.destructive();
                    continue;
                } else {
                    animation.x = 0;
                }
            }
            animation.rectangle.x = animation.x * animation.size;
            animation.rectangle.y = animation.y * animation.size;
            animation.rectangle.width = animation.size;
            animation.rectangle.height = animation.size;
            animation.texture.frame = animation.rectangle;
            ++animation.x;
        }
        ++animation.frameCount;
    };
}
function createAnimatedSprite(name, size = 96) {
    var tex = TextureCache["sprites/" + name + ".png"];
    var rec = new Rectangle(0,0,size,size);
    tex.frame = rec;
    // squirrelTexture.baseTexture.scaleMode = ;
    var sprite = new Sprite(tex);
    sprite.anchor.set(0.5);
    app.stage.addChild(sprite);
    var anim = {y: 0, x: 0, length: 5, speed: 4, frameCount: 0, texture: tex, rectangle: rec, size: size};
    var obj = {
        sprite,
        animation: anim,
        pause: function(){anim.paused = true},
        play: function(){anim.paused = false},
        setAnim: function(y, len){
            anim.y = y;
            anim.length = len;
        },
        goto: function(x, y) {
            sprite.x = x;
            sprite.y = y;
        },
        destroy: function() {
            app.stage.removeChild(sprite);
            anim.destroy = true;
        }
    };
    animations.push(obj.animation);
    return obj;
}
function press(key){
    if(keys[key]){
        keys[key] = false;
        return true;
    }
    return false;
}
addEventListener("mousedown",function(e){
    if(e.button == 0) {
        keys.mouse = true;
    } else if(e.button == 2) {
        keys.rightMouse = true;
    }
    mouseX = e.pageX;
    mouseY = e.pageY;
});
addEventListener("mouseup",function(e){
    if(e.button == 0) { 
        keys.mouse = false;
    } else if(e.button == 2) {
        keys.rightMouse = true;
    }
});
addEventListener("blur", function (){
    keys = {};
});
addEventListener("mousemove",function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});
addEventListener("keydown", function (e){
    keys[e.key] = true;
});
addEventListener("keyup", function (e){
    keys[e.key] = false;
});