import { domGet } from '../../render/domGet.js'; 
import { highlighter } from '../highlight.js';

const looper = {


switchSelect(i) {
    highlighter.unselectPads()
    highlighter.selected(i, 'stdOn');
},

doSwitch(done) {
        if(done) {
            clearTimeout(this.d0);
        } else {
            highlighter.reset();
    let d0 = setTimeout(function() {
        highlighter.selected(one, 'stdOn');    
    }, 100);
    d0 = setTimeout(function() {
        highlighter.unselect(one, 'stdOn');    
    }, 200);
    d0 = setTimeout(function() {
        highlighter.selected(two, 'stdOn');    
    }, 400);
    d0 = setTimeout(function() {
        highlighter.unselect(two, 'stdOn');    
    }, 600);
    d0 = setTimeout(function() {
        highlighter.selected(three, 'stdOn');    
    }, 800);
    d0 = setTimeout(function() {
        highlighter.unselect(three, 'stdOn');    
    }, 1000);
    d0 = setTimeout(function() {
        highlighter.selected(four, 'stdOn');    
    }, 1200);
    d0 = setTimeout(function() {
        highlighter.unselect(four, 'stdOn');    
    }, 1400);
    d0 = setTimeout(function() {
        highlighter.selected(five, 'stdOn');    
    }, 1600);
    d0 = setTimeout(function() {
        highlighter.unselect(five, 'stdOn');    
    }, 1800);
    d0 = setTimeout(function() {
        highlighter.selected(six, 'stdOn');    
    }, 2000);
    d0 = setTimeout(function() {
        highlighter.unselect(six, 'stdOn');    
    }, 2200);
    d0 = setTimeout(function() {
        highlighter.selected(seven, 'stdOn');    
    }, 2400);
    d0 = setTimeout(function() {
        highlighter.unselect(seven, 'stdOn');    
    }, 2600);
    d0 = setTimeout(function() {
        highlighter.selected(eight, 'stdOn');    
    }, 2800);
    d0 = setTimeout(function() {
        highlighter.unselect(eight, 'stdOn');    
    }, 3000);
    d0 = setTimeout(function() {
        highlighter.selected(nine, 'stdOn');    
    }, 3200);
    d0 = setTimeout(function() {
        highlighter.unselect(nine, 'stdOn');    
    }, 3400);
    d0 = setTimeout(function() {
        highlighter.selected(ten, 'stdOn');    
    }, 3600);
    d0 = setTimeout(function() {
        highlighter.unselect(ten, 'stdOn');    
    }, 3800);
    d0 = setTimeout(function() {
        highlighter.selected(eleven, 'stdOn');    
    }, 4000);
    d0 = setTimeout(function() {
        highlighter.unselect(eleven, 'stdOn');    
    }, 4200);
    d0 = setTimeout(function() {
        highlighter.selected(twelve, 'stdOn');    
    }, 4400);
    d0 = setTimeout(function() {
        highlighter.unselect(twelve, 'stdOn');    
    }, 4600);
    d0 = setTimeout(function() {
        highlighter.selected(thirdTeen, 'stdOn');    
    }, 4800);
    d0 = setTimeout(function() {
        highlighter.unselect(thirdTeen, 'stdOn');    
    }, 5000);
    d0 = setTimeout(function() {
        highlighter.selected(fourTeen, 'stdOn');    
    }, 5200);
    d0 = setTimeout(function() {
        highlighter.unselect(fourTeen, 'stdOn');    
    }, 5400);
    d0 = setTimeout(function() {
        highlighter.selected(fiveTeen, 'stdOn');    
    }, 5600);
    d0 = setTimeout(function() {
        highlighter.unselect(fiveTeen, 'stdOn');    
    }, 5800);
    d0 = setTimeout(function() {
        highlighter.selected(sixTeen, 'stdOn');    
    }, 6000);
    d0 = setTimeout(function() {
        highlighter.unselect(sixTeen, 'stdOn');    
    }, 6200);
    }

},

looper(object) {
    if (n >= 16) {
        doSwitch(object);
    }

}

}
export { looper }