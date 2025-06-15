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
/// Fill the screen 
app.renderer.resize(window.innerWidth, window.innerHeight/2);
addEventListener("resize", function(){
    app.renderer.resize(window.innerWidth, window.innerHeight/2);
});
document.body.appendChild(app.view);
loader.add("sprites/Maria.png").add("sprites/star.png").load(setup);
var state;
var keys = {};
var mouseX,mouseY;
function setup() {
    state = wait;
    app.ticker.add(delta => gameLoop(delta));
}
var maria;
var bottomY = innerHeight/2 - 50;
function loadRhythmGame() {
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
    event.on("noteHit", function(dur) {
        maria.vy = -30;
        maria.sprite.y--;
    });
}
var hazardSpeed = 200; //pixels per sec
var hazards = [];
function spawnHazards(track, beatTime) {
    var beatCoe = hazardSpeed * beatTime / 1000;
    var offset = downBeats * beatCoe + maria.sprite.width/2;
    for(var i = 0; i < track.length; i++) {
        var note = track[i];
        var hazard = new Sprite(resources["sprites/star.png"].texture);
        hazard.anchor.set(0.5);
        hazard.y = bottomY - maria.sprite.height/2 - 32;
        hazard.x = offset + beatCoe * note.trueBeat;
        app.stage.addChild(hazard);
        hazards.push(hazard);
    }
}
addEventListener("keypress", function() {
    event.emit("noteHit");
});
function gameLoop(delta) {
    state(delta)
}
var animations = [];
function wait(){
    
}
var gravity = 3.6;
function playRhythm(dT){
    renderAnims();
    if(maria.sprite.y < bottomY) {
       maria.sprite.y += maria.vy;
       maria.vy += gravity; 
    } else if(maria.sprite.y > bottomY) {
        maria.vy = 0;
        maria.sprite.y = bottomY;
    }
    hazards.forEach(function(hazard) {
        hazard.x -= dT * 1/60 * hazardSpeed;
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