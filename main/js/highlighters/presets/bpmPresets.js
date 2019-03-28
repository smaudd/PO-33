import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';

const bpmPreset = {
    one() {
        highlighter.reset();
        highlighter.selected(bpm, 'stdOn');
        highlighter.flashing(one, 'stdOn');
        highlighter.flashing(two, 'stdOn');
        highlighter.flashing(three, 'stdOn');
        highlighter.flashing(four, 'stdOn');
        highlighter.flashing(five, 'stdOn');
    },
    two() {
        highlighter.reset();
        highlighter.selected(bpm, 'stdOn');
        highlighter.start()
    },
    three() {
        highlighter.reset();
        highlighter.selected(bpm, 'stdOn');
        highlighter.flashing(one, 'stdOn');
        highlighter.flashing(two, 'stdOn');
        highlighter.flashing(three, 'stdOn');
        highlighter.flashing(four, 'stdOn');
        highlighter.flashing(five, 'stdOn');
    },
    four() {
        highlighter.reset();
        highlighter.flashing(sound, 'orangeFlashing');
        highlighter.flashing(bpm, 'stdFlashing');
    },
    //Load each sound preset highlighting 
    loadBpmPreset() {
        document.getElementById('i').addEventListener('click', function() {
            bpmPreset.one();
        });
        document.getElementById('ii').addEventListener('click', function() {
            bpmPreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            bpmPreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            bpmPreset.four();
        });
    },
};

export { bpmPreset }