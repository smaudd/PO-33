function loadApp() {
    document.getElementById('app').innerHTML='<object type="text/html" data="./main/app.html"></object>';
}

function loadTips() {
    document.getElementById('tips').innerHTML='<object type="text/html" data="./main/tips.html"></object>';
}

loadTips();
loadApp();