import { domGet } from '../render/domGet.js';
import { highlighter } from '../highlighters/highlight.js';
import { soundPreset } from '../highlighters/presets/soundPresets.js';
import { patternPreset } from '../highlighters/presets/patternPresets.js';
import { bpmPreset } from '../highlighters/presets/bpmPresets.js';
import { recordPreset } from '../highlighters/presets/recordPresets.js';
import { fxPreset } from '../highlighters/presets/fxPresets.js';
import { writePreset } from '../highlighters/presets/writePresets.js';
import { nav } from '../render/navigator.js';
import { info } from './info.js';
import { loadInfo } from './loadInfo.js';
import { looper } from '../highlighters/presets/playLooper.js';

//This object handles event changes on each element of the DOM and shows information about that element on display
const loadInit = {
//Load each menu and navigation UI
loadSoundMenu() {
    sound.addEventListener('click', function() {
            looper.doSwitch(true);
            nav.clean();
            highlighter.reset();
            soundPreset.one();
            loadInfo(info.sound.sound1);
            highlighter.text(display, "text");
            nav.navLauncher(info.sound.sound1, info.sound.sound2, info.sound.sound3, true, info.sound.sound4, true,
                info.sound.sound5, true);
            soundPreset.loadSoundPreset();
    });
},
loadPatternMenu() {
    pattern.addEventListener('click', function() {
            nav.clean();
            patternPreset.one();
            loadInfo(info.pattern.pattern1);
            highlighter.text(display, "text");
            nav.navLauncher(info.pattern.pattern1, info.pattern.pattern2, info.pattern.pattern3, true,
            info.pattern.pattern4, true, info.pattern.pattern5, true);
            patternPreset.loadPatternPreset();
    });
},

loadBpmMenu() { 
    bpm.addEventListener('click', function() {
            nav.clean();
            highlighter.reset();
            bpmPreset.one();
            loadInfo(info.bpm.bpm1);
            highlighter.text(display, "text");
            nav.navLauncher(info.bpm.bpm1, info.bpm.bpm2, info.bpm.bpm3, true, info.bpm.bpm4, true);
            bpmPreset.loadBpmPreset();
    })
},

loadRecordMenu() { 
    record.addEventListener('click', function() {
            nav.clean();
            highlighter.reset();
            recordPreset.one();
            loadInfo(info.record.record1);
            nav.navLauncher(info.record.record1, info.record.record2, info.record.record3, true, info.record.record4, true, info.record.record5, true);
            recordPreset.loadRecordPreset();
    });
},

loadFxMenu() { 
    fx.addEventListener('click', function() {
            nav.clean();
            highlighter.reset();
            fxPreset.one();
            loadInfo(info.fx.fx1);
            nav.navLauncher(info.fx.fx1, info.fx.fx2, info.fx.fx3, true, info.fx.fx4, 
                info.fx.fx4, info.fx.fx5, true);
            fxPreset.loadFxPreset();
});
},

loadPlayMenu() { 
    play.addEventListener('click', function() {
            nav.clean();
            loadInfo(info.play.play1);
            highlighter.selected(play, 'stdOn');
            highlighter.flashEverything();
            nav.backInit();
});
},

loadWriteMenu() { 
    write.addEventListener('click', function() {
            nav.clean();
            highlighter.reset();
            writePreset.one();
            loadInfo(info.write.write1);
            nav.navLauncher(info.write.write1, info.write.write2, info.write.write3, true,
                info.write.write4, true, info.write.write5, true);
            writePreset.loadWritePreset();
});
},

loadKnobA() { 
    knobA.addEventListener('click', function() {
        highlighter.reset();
        nav.clean();
        loadInfo(info.knob.knob1);
        nav.navLauncher(info.knob.knob1, info.knob.knob2);
    })
},

loadKnobB() { 
    knobB.addEventListener('click', function() {
        highlighter.reset();
        nav.clean();
        loadInfo(info.knob.knob1);
        nav.navLauncher(info.knob.knob1, info.knob.knob2);
    })
},

loadPads() {
    pads.addEventListener('click', function() {
        nav.clean();
        loadInfo(info.pad.pad1);
        nav.backInit();
        highlighter.onEverything(); 
    })
}

}

//Call all the methods inside the object
function load() {
    loadInit.loadSoundMenu();
    loadInit.loadPatternMenu();
    loadInit.loadBpmMenu();
    loadInit.loadRecordMenu();
    loadInit.loadFxMenu();
    loadInit.loadPlayMenu();
    loadInit.loadWriteMenu();
    loadInit.loadKnobA();
    loadInit.loadKnobB();
    loadInit.loadPads();
}

export { loadInit, load };