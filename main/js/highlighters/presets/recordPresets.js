import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';

const recordPreset = {
    one() {
        highlighter.reset();
        highlighter.selected(record, 'orangeOn');
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
        highlighter.selected(record, 'orangeFlashing');
    },
    three() {
        highlighter.reset();
        highlighter.selected(record, 'orangeFlashing');
        highlighter.scale();
    },
    four() {
        highlighter.reset();
        highlighter.flashing(record, 'orangeFlashing');
        highlighter.flashing(sound, 'orangeFlashing');
        highlighter.flashing(pattern, 'stdFlashing');
        
    },
    //Load each sound preset highlighting 
    loadRecordPreset() {
        document.getElementById('i').addEventListener('click', function() {
            recordPreset.one();
        });
        document.getElementById('ii').addEventListener('click', function() {
            recordPreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            recordPreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            recordPreset.four();
        });
    },
};

export { recordPreset }