import { render } from "./js/render/render.js";
import { loadInit, load } from "./js/loaders/loadInit.js";
import { loadInfo, initSubInfo } from "./js/loaders/loadInfo.js";
render.btnLauncher();
load();
loadInfo("Welcome! This web will show you how to work the functions of the PO-33 K.O<br>Click on any button to start learning <b>Be sure to check all the chapters on each button!!!</b>");
initSubInfo("This app was made just for educational purposes")


