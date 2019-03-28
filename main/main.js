function loadApp() {
    document.getElementById('app').innerHTML='<object type="text/html" data="./main/app.html"></object>';
}

function loadTips() {
    document.getElementById('tips').innerHTML='<object type="text/html" data="./main/tips.html"></object>';
}

function counter() {

var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('CounterVisitor').innerHTML = n;
}

loadTips();
loadApp();
counter();