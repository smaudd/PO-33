import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';

const writePreset = {
    one() {
        highlighter.reset();
        highlighter.selected(write, 'fxOn');
        highlighter.selected(one, 'stdOn');
        highlighter.selected(five, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(thirdTeen, 'stdOn');
    },
    two() {
        highlighter.reset();
        highlighter.selected(write, 'fxOn');
        highlighter.selected(one, 'stdOn');
        highlighter.selected(five, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(thirdTeen, 'stdOn');
    },
    three() {
        highlighter.reset();
        highlighter.selected(write, 'fxOn');
        highlighter.flashing(fx, 'fxFlashing');
        highlighter.flashEverything();
    },
    four() {
        highlighter.reset();
        highlighter.selected(write, 'fxOn');
    },
    five() {
        highlighter.reset();
       
    },
    //Load each sound preset highlighting 
    loadWritePreset() {
        document.getElementById('i').addEventListener('click', function() {
            writePreset.one();
        });
        document.getElementById('ii').addEventListener('click', function() {
            writePreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            writePreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            writePreset.four();
        });
        document.getElementById('v').addEventListener('click', function() {
            writePreset.five();
        });
    },
};

export { writePreset }