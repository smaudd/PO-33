import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';
let clicked = false;
const fxPreset = {
    one() {
        highlighter.reset();
        highlighter.selected(fx, 'fxOn');
        highlighter.flashEverything();
    },
    two() {
        highlighter.reset();
        highlighter.selected(fx, 'fxOn');
        highlighter.flashEverything();
    },
    three() {
        highlighter.reset();
        highlighter.start(); 
        highlighter.selected(fx, 'fxOn');
    },
    four() {
        highlighter.reset();
        highlighter.start(); 
        highlighter.selected(fx, 'fxOn');
        
    },
    five() {
        highlighter.reset();
        highlighter.start(); 
        highlighter.selected(fx, 'fxOn');
       
    },
    //Load each sound preset highlighting 
    loadFxPreset() {
        document.getElementById('i').addEventListener('click', function() {
            highlighter.reset();
            fxPreset.one();
            clicked = true;
        });
        document.getElementById('ii').addEventListener('click', function() {
            highlighter.reset();
            fxPreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            highlighter.reset();
            fxPreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            highlighter.reset();
            fxPreset.four();
        });
        document.getElementById('v').addEventListener('click', function() {
            highlighter.reset();
            fxPreset.five();
        });
    },
};

export { fxPreset }