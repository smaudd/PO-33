import { domGet } from './domGet.js';

const render = {

//This function makes child button elements with some given ID
mkBtn(tag, id, type) {
        let btn = document.createElement('button');
        btn.setAttribute("id", id);
        btn.classList.add(type);
        document.getElementById(tag).appendChild(btn);
    },

//This function makes child button elements represented with ID on pads array which are imported from domGet module
mkPad(tag) {
    for (let i=0; i<=15; i++) {
        let btn = document.createElement('button');
        btn.setAttribute("id", domGet.pads[i]);
        btn.classList.add('pads');
        document.getElementById(tag).appendChild(btn);
    }

},

mkKnob(tag, id) {
        let btn = document.createElement('button');
        btn.setAttribute("id", id);
        btn.classList.add('knobs');
        document.getElementById(tag).appendChild(btn);
    },

//Call all the methods inside this object to render the DOM 
btnLauncher() {
this.mkBtn("nav1", "sound", "orange");
this.mkBtn("nav1", "pattern", "std");
this.mkBtn("nav1", "bpm", "std");
this.mkKnob("knobs", "knobA");
this.mkKnob("knobs", "knobB");
this.mkBtn("nav2", "record", "orange");
this.mkBtn("nav2", "fx", "fx");
this.mkBtn("nav2", "play", "std");
this.mkBtn("nav2", "write", "fx");
this.mkPad("pads");
},

}

export { render };