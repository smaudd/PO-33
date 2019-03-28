import { domGet } from '../render/domGet.js';
let keepGoing = true;
const highlighter = {

selected(btn, type) {
    btn.classList.add(type);
},

selected2(btn, type) {
    btn.classList.add(type);
},

unselect(btn, type) {
    btn.classList.remove(type);
},

unselectNavs() {
    sound.classList.remove('orangeOn'); 
    pattern.classList.remove('stdOn'); 
    bpm.classList.remove('stdOn'); 
    record.classList.remove('orangeOn'); 
    fx.classList.remove('fxOn'); 
    play.classList.remove('stdOn');
    write.classList.remove('fxOn'); 
    sound.classList.remove('orangeFlashing'); 
    pattern.classList.remove('stdFlashing'); 
    bpm.classList.remove('stdFlashing'); 
    record.classList.remove('orangeFlashing'); 
    fx.classList.remove('fxFlashing'); 
    play.classList.remove('stdFlashing');
    write.classList.remove('fxFlashing'); 
},

unselectPads() {
    one.classList.remove('stdOn'); 
    two.classList.remove('stdOn'); 
    three.classList.remove('stdOn'); 
    four.classList.remove('stdOn'); 
    five.classList.remove('stdOn'); 
    six.classList.remove('stdOn'); 
    seven.classList.remove('stdOn'); 
    eight.classList.remove('stdOn'); 
    nine.classList.remove('stdOn'); 
    ten.classList.remove('stdOn'); 
    eleven.classList.remove('stdOn'); 
    twelve.classList.remove('stdOn'); 
    thirdTeen.classList.remove('stdOn'); 
    fourTeen.classList.remove('stdOn');
    fiveTeen.classList.remove('stdOn'); 
    sixTeen.classList.remove('stdOn');
    one.classList.remove('stdFlashing'); 
    two.classList.remove('stdFlashing'); 
    three.classList.remove('stdFlashing'); 
    four.classList.remove('stdFlashing'); 
    five.classList.remove('stdFlashing'); 
    six.classList.remove('stdFlashing'); 
    seven.classList.remove('stdFlashing'); 
    eight.classList.remove('stdFlashing'); 
    nine.classList.remove('stdFlashing'); 
    ten.classList.remove('stdFlashing'); 
    eleven.classList.remove('stdFlashing'); 
    twelve.classList.remove('stdFlashing'); 
    thirdTeen.classList.remove('stdFlashing'); 
    fourTeen.classList.remove('stdFlashing');
    fiveTeen.classList.remove('stdFlashing'); 
    sixTeen.classList.remove('stdFlashing');     
},

flashing(btn, type) {
    btn.classList.add(type);
},

text(info, type) {
    info.classList.add(type);
},

reset() {
    this.unselectPads();
    this.unselectNavs();
    this.stop();
    this.deleteScale();
},

animateKnobs() {
    if (keepGoing) {
    setTimeout(function() {
        highlighter.flashing(knobA, 'knobsFlashing');
        highlighter.unselect(knobB, 'knobsFlashing');
    }, 10);
    setTimeout(function() {
        highlighter.flashing(knobB, 'knobsFlashing');
        highlighter.unselect(knobA, 'knobsFlashing');
    }, 500);
    setTimeout(function() {
        highlighter.unselect(knobA, 'knobsFlashing');
        highlighter.unselect(knobB, 'knobsFlashing');
        highlighter.animateKnobs();
    }, 1000);
}
},

start() {
    keepGoing = true;
    highlighter.animateKnobs();
    highlighter.stop();
},

stop() {
    keepGoing = false;
},

innerText(btn, text) {
    btn.innerHTML = text;
},

scale() {
    this.innerText(thirdTeen, "C3");
    this.innerText(fourTeen, "D3");
    this.innerText(fiveTeen, "D#3");
    this.innerText(sixTeen, "F3");
    this.innerText(nine, "G3");
    this.innerText(ten, "G#3");
    this.innerText(eleven, "A#3");
    this.innerText(twelve, "B3");
    this.innerText(five, "C4");
    this.innerText(six, "D4");
    this.innerText(seven, "D#4");
    this.innerText(eight, "F4");
    this.innerText(one, "G4");
    this.innerText(two, "G#4");
    this.innerText(three, "A#4");
    this.innerText(four, "B4");

},

deleteScale() {
    this.innerText(thirdTeen, "");
    this.innerText(fourTeen, "");
    this.innerText(fiveTeen, "");
    this.innerText(sixTeen, "");
    this.innerText(nine, "");
    this.innerText(ten, "");
    this.innerText(eleven, "");
    this.innerText(twelve, "");
    this.innerText(five, "");
    this.innerText(six, "");
    this.innerText(seven, "");
    this.innerText(eight, "");
    this.innerText(one, "");
    this.innerText(two, "");
    this.innerText(three, "");
    this.innerText(four, ""); 
},

flashEverything() {
        highlighter.flashing(one, 'stdFlashing');
        highlighter.flashing(two, 'stdFlashing');
        highlighter.flashing(three, 'stdFlashing');
        highlighter.flashing(four, 'stdFlashing');
        highlighter.flashing(five, 'stdFlashing');
        highlighter.flashing(six, 'stdFlashing');
        highlighter.flashing(seven, 'stdFlashing');
        highlighter.flashing(eight, 'stdFlashing');
        highlighter.flashing(nine, 'stdFlashing');
        highlighter.flashing(ten, 'stdFlashing');
        highlighter.flashing(eleven, 'stdFlashing');
        highlighter.flashing(twelve, 'stdFlashing');
        highlighter.flashing(thirdTeen, 'stdFlashing');
        highlighter.flashing(fourTeen, 'stdFlashing');
        highlighter.flashing(fiveTeen, 'stdFlashing');
        highlighter.flashing(sixTeen, 'stdFlashing');
},

onEverything() {
    highlighter.selected(one, 'stdOn');
    highlighter.selected(two, 'stdOn');
    highlighter.selected(three, 'stdOn');
    highlighter.selected(four, 'stdOn');
    highlighter.selected(five, 'stdOn');
    highlighter.selected(six, 'stdOn');
    highlighter.selected(seven, 'stdOn');
    highlighter.selected(eight, 'stdOn');
    highlighter.selected(nine, 'stdOn');
    highlighter.selected(ten, 'stdOn');
    highlighter.selected(eleven, 'stdOn');
    highlighter.selected(twelve, 'stdOn');
    highlighter.selected(thirdTeen, 'stdOn');
    highlighter.selected(fourTeen, 'stdOn');
    highlighter.selected(fiveTeen, 'stdOn');
    highlighter.selected(sixTeen, 'stdOn');
}

}

export { highlighter };