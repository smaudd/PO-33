import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';

const soundPreset = {
    one() {
        highlighter.reset();
        highlighter.selected(sound, 'orangeOn');
        highlighter.flashing(one, 'stdFlashing');
        highlighter.selected(two, 'stdOn');
        highlighter.selected(three, 'stdOn');
        highlighter.selected(four, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(ten, 'stdOn');
        highlighter.selected(eleven, 'stdOn');
        highlighter.selected(twelve, 'stdOn');
    },
    two() {
        highlighter.reset();
        highlighter.selected(sound, 'orangeOn');
        highlighter.flashing(one, 'stdFlashing');
        highlighter.selected(two, 'stdOn');
        highlighter.selected(three, 'stdOn');
        highlighter.selected(four, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(ten, 'stdOn');
        highlighter.selected(eleven, 'stdOn');
        highlighter.selected(twelve, 'stdOn');
    },
    three() {
        highlighter.reset();
        highlighter.flashing(record, 'orangeFlashing');
        highlighter.flashing(sound, 'orangeFlashing');
        highlighter.selected(two, 'stdOn');
        highlighter.selected(three, 'stdOn');
        highlighter.selected(four, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(ten, 'stdOn');
        highlighter.selected(eleven, 'stdOn');
        highlighter.selected(twelve, 'stdOn');
    },
    four() {
        highlighter.reset();
        highlighter.flashing(write, 'fxFlashing');
        highlighter.flashing(sound, 'orangeFlashing');
        highlighter.flashing(one, 'stdFlashing');
        highlighter.selected(sound, 'orangeOn');
        highlighter.selected(two, 'stdOn');
        highlighter.selected(three, 'stdOn');
        highlighter.selected(four, 'stdOn');
        highlighter.selected(nine, 'stdOn');
        highlighter.selected(ten, 'stdOn');
        highlighter.selected(eleven, 'stdOn');
        highlighter.selected(twelve, 'stdOn');
    },
    //Load each sound preset highlighting 
    loadSoundPreset() {
        document.getElementById('i').addEventListener('click', function() {
            soundPreset.one();
        });
        document.getElementById('ii').addEventListener('click', function() {
            soundPreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            soundPreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            soundPreset.four();
        });
    },
};

export { soundPreset }