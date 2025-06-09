
var vf = new Vex.Flow.Factory({renderer: {elementId: "staff"}});
var score = vf.EasyScore();
var system = vf.System(); 
system.addStave({
    voices: [
        score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
        score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
    ]
}).addClef('treble').addTimeSignature('4/4');

vf.draw();