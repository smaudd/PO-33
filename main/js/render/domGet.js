const domGet = {

//ID selector for the declaration of each pad
pads : ["one", "two", "three", "four", "five", "six", "seven",
"eight", "nine", "ten", "eleven", "twelve", "thirdTeen", "fourTeen", "fiveTeen", "sixTeen"],

display : document.getElementById('display'),

//Declares each settings buttons with as properties
settings : {
sound : document.getElementById('sound'),
pattern : document.getElementById('pattern'),
bpm : document.getElementById('bpm'),
knobA : document.getElementById('knobA'),
knobB : document.getElementById('knobB'),
record : document.getElementById('record'),
fx : document.getElementById('fx'),
play : document.getElementById('play'),
write : document.getElementById('write'),
},

//Declares all the pads as properties
pad : { 
    one: (document.getElementById('one')),
    two: (document.getElementById('two')),
    tree: (document.getElementById('three')),
    four: (document.getElementById('four')),
    five: (document.getElementById('five')),
    six: (document.getElementById('six')),
    seven: (document.getElementById('seven')),
    eight: (document.getElementById('eight')),
    nine: (document.getElementById('nine')),
    ten: (document.getElementById('ten')),
    eleven: (document.getElementById('eleven')),
    twelve: (document.getElementById('twelve')),
    thirdTeen: (document.getElementById('thirdTeen')),
    fourTeen: (document.getElementById('fourTeen')),
    fiveTeen: (document.getElementById('fiveTeen')),
    sixTeen: (document.getElementById('sixTeen')),
    }


}

export { domGet };