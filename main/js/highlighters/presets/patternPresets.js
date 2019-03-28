import { highlighter } from '../highlight.js'; 
import { domGet } from '../../render/domGet.js';


const patternPreset = {
    one() {
        highlighter.reset();
        highlighter.selected(pattern, "stdOn");
        highlighter.flashing(one, "stdFlashing");
        highlighter.onEverything();

    },
    two() {
        highlighter.reset();
        highlighter.selected(pattern, "stdOn");
        highlighter.flashing(one, "stdFlashing");
        highlighter.onEverything();
    },
    three() {
        highlighter.reset();
        highlighter.flashing(record, "orangeFlashing");
        highlighter.flashing(pattern, "stdFlashing");
        highlighter.onEverything();
        highlighter.unselect(one, "stdOn");
    },
    four() {
        highlighter.reset();
        highlighter.flashing(write, "fxFlashing");
        highlighter.flashing(pattern, "stdFlashing");
        highlighter.onEverything();
    },
    five() {
        highlighter.reset();
        highlighter.selected(pattern, "stdOn");
        highlighter.onEverything();
    },
    //Load each pattern preset highlighting 
    loadPatternPreset() {
        document.getElementById('i').addEventListener('click', function() {
            patternPreset.one();
        });
        document.getElementById('ii').addEventListener('click', function() {
            patternPreset.two();
        });
        document.getElementById('iii').addEventListener('click', function() {
            patternPreset.three();
        });
        document.getElementById('iv').addEventListener('click', function() {
            patternPreset.four();
        });
        document.getElementById('v').addEventListener('click', function() {
            patternPreset.five();
        });
    },
};

export { patternPreset }