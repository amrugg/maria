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
app.renderer.backgroundColor = 0x55DD55;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.top = "0px";
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
    spawnHazards(midi, beatTime);
    maria.goto(maria.sprite.width/2, bottomY);
    maria.setAnim(1,4);
    maria.animation.speed = 7;
    event.on("noteHit", function(note) {
        if(maria.sprite.y === bottomY || true) {
            maria.vy = -30;
            maria.sprite.y--;
        } else {
            
        }
    });

}
function loadStaffGame() {
    state = playStaff;
    lastCheckedIndex = 0;
    event.on("noteHit", function(note) {
        makeStar(note.data[0]);
    });
}
function makeStar(num) {
    var star = new Sprite(resources["sprites/star.png"].texture);
    star.anchor.set(0.5,0.5);
    star.x = -50;
    star.y = getNoteYPosition(num);
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
        hazard.x -= dTime * hazardSpeed;
    });
    renderAnims();
}
function checkForNewHazards(curBeat) {
    for(var i = lastCheckedIndex; i < midi.length; i++) {
        var note = midi[i];
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

    return yPosition;
}


function spawnStaffHazard(note) {
    var hazard = createAnimatedSprite("projectile-fireball", 144);
    app.stage.addChild(hazard.sprite)
    hazard.sprite.rotation = Math.PI/2;
    hazard.goto(innerWidth + hazard.sprite.width, getNoteYPosition(note.data[0]) * staffProps.scale);
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
addEventListener("keypress", function() {
    event.emit("noteHit");
    judgeNote();
});
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
    stars.forEach(function(star) {
        star.x += dTime * 400;
    });
}
function renderAnims() {
    animations.forEach(function(animation){
        if(animation.paused) {
            return;
        }
        if(animation.frameCount%animation.speed === 0) {
            if(animation.x >= animation.length) {
                if(animation.destructive) {
                    animation.destructive();
                    return;
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
    });
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