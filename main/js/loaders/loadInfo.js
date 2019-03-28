import { domGet } from '../render/domGet.js';
import { info } from './info.js';
import { nav } from '../render/navigator.js';

function loadInfo(info) {
    display.classList.remove('text');
    void display.offsetWidth;
    display.classList.add('text');
    display.innerHTML = info;
}

function initSubInfo(navInfo) {
    const nav = document.getElementById('nav');
    nav.classList.remove('textNav');
    void nav.offsetWidth;
    nav.classList.add('textNav');
    nav.innerHTML = navInfo;
}

function initNav() {
    const nav = document.getElementById('nav');
    nav.classList.remove('textNav');
    void nav.offsetWidth;
    nav.classList.add('textNav');
}

export { loadInfo, initSubInfo, initNav };