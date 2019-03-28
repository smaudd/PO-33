import { info } from '../loaders/info.js';
import { loadInfo, initSubInfo, initNav } from '../loaders/loadInfo.js';
import { highlighter } from '../highlighters/highlight.js';
import { domGet } from '../render/domGet.js';
import { preset } from '../highlighters/highlightPreset.js';

const nav = {

backInit() {
    let backInit = document.createElement('button');
    backInit.innerHTML = "Main Menu";
    backInit.setAttribute('id', 'backInit');
    document.getElementById('nav').appendChild(backInit);
    backInit.addEventListener('click', function() {
        highlighter.stop();
        highlighter.reset();
        loadInfo("Welcome! This web will show you how to work the functions of the PO-33 K.O<br>Click on any button to start learning <b>Be sure to check all the chapters on each button!!!</b>");
        initSubInfo("This app was made just for educational purposes");
    });
},
clean() {
    document.getElementById('nav').innerText = "";
},


mkNav(id, str) {
    initNav();
    id.innerHTML = str;
    id.setAttribute('id', str);
    document.getElementById('nav').appendChild(id);
},

navLauncher(info, info2, info3, plus, info4, plus1, info5, plus2) {
    //Declares all the possible variables in order to be used
        let i = document.createElement('button');
        let ii = document.createElement('button');
        let iii = document.createElement('button');
        let iv = document.createElement('button');
        let v = document.createElement('button');
    //Fix the menu for each section
    function pageSelected(x, y, z, a, b) {
        i.innerHTML = x;
        ii.innerHTML = y;
        iii.innerHTML = z;
        iv.innerHTML = a;
        v.innerHTML = b;
    };
    this.backInit();
    this.mkNav(i, "i");
    this.mkNav(ii, "ii");
    i.innerHTML = "(i)";
    i.addEventListener('click', function() {
        loadInfo(info);
        pageSelected("(i)", "ii", "iii", "iv", "v");
    })
    ii.addEventListener('click', function() {
        loadInfo(info2);
        pageSelected("i", "(ii)", "iii", "iv", "v");
    })
    //Checks if the third, four and five pages are needed 
    if (plus) {
        this.mkNav(iii, "iii");
        iii.addEventListener('click', function() {
    
            loadInfo(info3);
            pageSelected("i", "ii", "(iii)", "iv", "v"); 
        })
        }

    if (plus1) {
        this.mkNav(iv, "iv");
        iv.addEventListener('click', function() {
    
            loadInfo(info4);
            pageSelected("i", "ii", "iii", "(iv)", "v");
        })
        }
    //Checks if the five page is needed
    if (plus2) {
        this.mkNav(v, "v");
        v.addEventListener('click', function() {   
            loadInfo(info5);
            pageSelected("i", "ii", "iii", "iv", "(v)");
        })
        }
},
}

export { nav };