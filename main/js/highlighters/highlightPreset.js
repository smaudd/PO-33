import { highlighter } from './highlight.js'; 
import { domGet } from '../render/domGet.js';
import { nav } from '../render/navigator.js';
const preset = {

     sound : {
        one() {
            highlighter.reset();
            highlighter.selected(sound, "orangeOn");
            highlighter.flashing(one, "stdFlashing");
        },
        two() {
            highlighter.reset();
            highlighter.selected(sound, "orangeOn");
            highlighter.flashing(one, "stdFlashing");
            highlighter.selected(two, 'stdOn');
            highlighter.selected(three, 'stdOn');
            highlighter.selected(nine, 'stdOn');
            highlighter.selected(ten, 'stdOn');
            highlighter.selected(eleven, 'stdOn');
            highlighter.selected(twelve, 'stdOn');
        },
        three() {
            highlighter.reset();
            highlighter.flashing(record, "orangeFlashing");
            highlighter.flashing(sound, "orangeFlashing");
        },
        four() {
            highlighter.reset();
            highlighter.flashing(write, "fxFlashing");
            highlighter.flashing(sound, "orangeFlashing");
        },
        //Load each sound preset highlighting 
        loadSoundPreset() {
            document.getElementById('i').addEventListener('click', function() {
                preset.sound.one();
            });
            document.getElementById('ii').addEventListener('click', function() {
                preset.sound.two();
            });
            document.getElementById('iii').addEventListener('click', function() {
                preset.sound.three();
            });
            document.getElementById('iv').addEventListener('click', function() {
                preset.sound.four();
            });
        },
    },

    pattern : {
        one() {
            highlighter.reset();
            highlighter.selected(pattern, "stdOn");
            highlighter.flashing(one, "stdFlashing");
        },
        two() {
            highlighter.reset();
            highlighter.selected(pattern, "stdOn");
            highlighter.flashing(thirdTeen, "stdFlashing");
            highlighter.selected(fourTeen, 'stdOn');
            highlighter.selected(three, 'stdOn');
            highlighter.selected(one, 'stdOn');
            highlighter.selected(two, 'stdOn');
            highlighter.selected(three, 'stdOn');
            highlighter.selected(four, 'stdOn');
        },
        three() {
            highlighter.reset();
            highlighter.flashing(record, "orangeFlashing");
            highlighter.flashing(pattern, "stdFlashing");
        },
        four() {
            highlighter.reset();
            highlighter.flashing(write, "fxFlashing");
            highlighter.flashing(pattern, "stdFlashing");
        },
        five() {
            highlighter.reset();
            highlighter.selected(pattern, "stdOn");
            highlighter.flashing(one, "stdFlashing");
            highlighter.selected(two, "stdOn");
            highlighter.selected(three, "stdOn");
        },
        //Load each pattern preset highlighting 
        loadPatternPreset() {
            document.getElementById('i').addEventListener('click', function() {
                preset.pattern.one();
            });
            document.getElementById('ii').addEventListener('click', function() {
                preset.pattern.two();
            });
            document.getElementById('iii').addEventListener('click', function() {
                preset.pattern.three();
            });
            document.getElementById('iv').addEventListener('click', function() {
                preset.pattern.four();
            });
            document.getElementById('v').addEventListener('click', function() {
                preset.pattern.five();
            });
        },
    }
};

export { preset }