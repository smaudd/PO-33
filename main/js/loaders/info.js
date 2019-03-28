import { highlighter } from '../highlighters/highlight.js';

const info = {
    sound: {
        sound1: "<b>The SOUND button:</b> Holding down <b>SOUND+ANY SLOT</b> will select that sound.<br> The blinking light will show you which sound is selected.",
        sound2: "The other lights represent the slots where there are any recorded sounds. Turned off slots are empty.",
        sound3: "Holding down <b>RECORD+SOUND</b> will erase the selected slot. <b>Be careful!!</b> If you delete any sound recorded in a slot you will lose it forever!",
        sound4: "Holding down <b>SOUND+WRITE</b> will copy the sound to another slot<font size='1px'><i> (empty or not)</i></font> You have to select the slot while holding down <b>SOUND+WRITE</b>",
        sound5: "Holding down <b>SOUND+ANY DRUM SLOT</b> several times will go through all the slices of that <b>DRUM</b> slot. You can copy just one slice of a <b>DRUM</b> slot into another slot."
    },

    pattern: {
        pattern1: "<b>The PATTERN button:</b> Holding down <b>PATTERN+ANY SLOT</b> will select that pattern. The blinking light will show you which pattern is selected.",
        pattern2: "The other lights represent the slots where there are any programmed patterns. Turned off slots are empty.",
        pattern3: "Holding down <b>RECORD+PATTERN</b> will erase the selected slot. <b>Be careful!!</b> If you delete any programmed pattern in a slot you will lose it forever!",
        pattern4: "Holding down <b>PATTERN+WRITE</b> will copy the pattern to another slot<font size='1px'><i> (empty or not)</i></font> You have to select the slot while holding down <b>PATTERN+WRITE</b>",
        pattern5: "You can chain patterns holding down <b>PATTERN+SEVERAL SLOTS</b>. You can chain up to 128 patterns. The options are pretty wide!"
    },

    bpm: {
        bpm1: "<b>The BPM button: </b>It chooses the tempo of the sequencer. There are three tempo presets <ol><li><b>DISCO = 120bpm</b></li> <li><b>TECHNO = 140bpm</b></li> <li><b>HIP-HOP = 80bpm</b></li></ol>",
        bpm2: "Holding down <b>BPM+KNOB-A</b> will change the swing of the sequencer. <br>Holding down <b>BPM+KNOB-B</b> will change the tempo of the sequencer, you can go from 60bpm to 240bpm.",
        bpm3: "Holding down the <b>BPM</b> button will show you the current output gain. It will be restarted to 5 every time you plug or unplug a jack to the line out.<br> Optimal recording output gain could be 12.",
        bpm4: "Holding down <b>SOUND+BPM</b>, will show you on the display useful information about the state of the device like CPU usage, battery, release version and recording memory left.",
    },

    record: {
        record1: "<b>The RECORD button:</b> Holding down <b>RECORD+ANY SLOT</b> will record the input line or the mic input. It will depend on if you have something plugged in the line input or not.",
        record2: "You have up to 40 seconds of recording memory. If you record into <b>MELODIC</b> slots, it will trigger the sample melodically. If you record into <b>DRUM</b> slots, it will slice the sample into 16 parts for each slot.",
        record3: "If you record something to <b>MELODIC</b> slots you can trigger that sound on a natural minor scale and a note with a higher semitone of the last note on the scale, as it is shown on the buttons. You will have two octaves.",
        record4: "<i>Remember!</i><br><b>RECORD+SOUND</b> will erase your selected sound<br><b>RECORD+PATTERN</b> will erase your selected pattern.",
        record5: "Holding down <b>RECORD+BPM</b> will access the <i>SYNC</i> options. <br><br>Detailed list of sync modes soon.</b>",
    },

    fx: {
        fx1: "<b>The FX button:</b> is used to activate FXs and tweak samples. Holding <b>FX+ANY SLOT</b> will activate some FX. Button 16 is used for turning off the effect if it is recorded. <font size='1px'>Lights turned on while holding down <b>FX</b> shows which fxs  are recorded.<font size>",
        fx2: "The <b>FX</b> button has 3 menus. Each of these menus have two parameters that can be modified with the knobs. You will be modifying the current selected slot. <i>Remember</i>, you can always check where you are holding down <b>SOUND</b>.",
        fx3: "<b>FLT:</b> Filter Menu<br><b>KNOB-A:</b> Low-pass and high-pass filter <i>(Left for low-pass and right for high-pass. Middle for no filter)</i>.<br><b>KNOB-B:</b> Resonance of the filter <i><br>(Left increases the resonance)</i>",
        fx4: "<b>TRI:</b> Trim Menu<br><b>KNOB-A:</b> Start of the sample <i>[in]</i><br><b>KNOB-B:</b> End of the sample <i>[out]</i><br>Tweaking this menu for any <b>DRUM</b> slot will trim the last played slice of the sample.<br>",
        fx5: "<b>TON:</b> Tone Menu<br><b>KBOB-A:</b> Change the pitch of the sample<br> <b>KNOB-B:</b> Adjusts the volume of the sound.",
    },

    play: {
        play1: "The <b>PLAY</b> button is really simple. It just starts and stops the sequencer.<br> No more, no less.",
    },
    
    write: {
        write1: "The <b>WRITE</b> button will show slots as turned ON/OFF steps of the sequencer. The screen will also show a record icon. You can record live by holding <b>WRITE+ANY SLOTS</b> with the sequencer playing. <font size='1px'>(out of write mode)</font>",
        write2: "You will activate the steps on the write mode with the last played sound before you go into the write mode.<br>Dim lights represent other programmed sounds on the same slot.",
        write3: "If the write mode is activated, every FX that you play while the sequencer is playing will be recorded!",
        write4: "You can copy a step by holding it down until the screen shows <b>CPY</b>. This is very useful if you don't remember on which slot that specific sound was.",
        write5: "If you hold down any activated step <font size='1px'>(with a <b>MELODIC</b> slot selected)</font> and tweak: <b>KNOB-A</b> will change the pitch of that particular step.<br><b>KNBOB-B</b> will adjust the length of the step."
    },

    knob: {
        knob1: "The <b>KNOBS</b> while the sequencer is playing will change the parameters of the current loaded tweak menu. You can see on which menu you are with the little icon shown on the display.<br><b>! is ton menu</b> | <b>? is FLT menu</b>",
        knob2: "You can record live any changes of the parameters on the menus <b>TON</b> and <b>FLT</b> by holding down <b>WRITE</b> while the sequencer is playing."
    },

    pad: {
        pad1: "The <b>SLOTS</b> will trigger the current selected sound or if the <b>WRITE MODE</b> is activated, it will turn ON/OFF that step of the sequencer."
    }

}

export { info };