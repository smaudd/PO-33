import { render } from './js/render/render.js';
import { info } from './info.js'
const nav = document.getElementById('nav');
const h2 = document.getElementById('title');
const display = document.getElementById('display');

const loadInfo = {
load() {
    this.fadeInOut();
    render.mkBtn('nav', 'tips', 'tips');
    tips.innerHTML = "Tips and Tricks"
    render.mkBtn('nav', 'creators', 'tips');
    creators.innerHTML = "Other PO-33 content"
    render.mkBtn('nav', 'about', 'tips');
    about.innerHTML = "About this web-page";
    render.mkBtn('nav', 'feedback', 'tips');
    feedback.innerHTML = "Give us your feedback";
    render.mkBtn('nav', 'video', 'tips');
    video.innerHTML = "Send your video!";
    render.mkBtn('back', 'backBtn', 'back');
    back.style.display = 'none';
},
fadeInOut() {
    nav.classList.remove('textAppear');
    void nav.offsetWidth;
    nav.classList.add('textAppear');  
    display.classList.remove('textAppear');
    void display.offsetWidth;
    display.classList.add('textAppear'); 
    back.classList.remove('textAppear');
    void back.offsetWidth;
    back.classList.add('textAppear');   
},

goback() {
    back.innerHTML = "Go back";
    back.style.display = 'grid';
back.addEventListener('click', function() {
    nav.style.display = 'grid';
    display.innerHTML = "";
    back.style.display = 'none';
    h2.innerHTML = "Other info";
})
},

hideNav() {
    loadInfo.fadeInOut();
    nav.style.display = 'none';  
}
}

loadInfo.load();

const listeners = {

loadTips() {
    tips.addEventListener('click', function() {
    loadInfo.hideNav();
    display.innerHTML = info.tips;
    h2.innerHTML = "Tips and Tricks";
    loadInfo.goback();  
})
},

loadContent() {
    creators.addEventListener('click', function() {
    loadInfo.hideNav(); 
    display.innerHTML = info.creators;
    h2.innerHTML = "Content about the PO-33";
    loadInfo.goback(); 
    })
},

loadAbout() {
    about.addEventListener('click', function() {
    loadInfo.hideNav(); 
    display.innerHTML = info.about;
    h2.innerHTML = "About this web-page";
    loadInfo.goback(); 
    })
},

loadFeedback() {
    feedback.addEventListener('click', function() {
    loadInfo.hideNav(); 
    display.innerHTML = info.feedback;
    h2.innerHTML = "Give us some feedback!";
    loadInfo.goback(); 
    })
},

loadVideo() {
    video.addEventListener('click', function() {
    loadInfo.hideNav(); 
    display.innerHTML = info.video;
    h2.innerHTML = "Send your video!";
    loadInfo.goback(); 
    })
}

}

listeners.loadTips();
listeners.loadContent();
listeners.loadAbout();  
listeners.loadFeedback();  
listeners.loadVideo();       