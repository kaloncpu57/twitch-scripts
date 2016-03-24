// ==UserScript==
// @name         Twitch Color Cycler
// @namespace    https://twitch.tv/kaloncpu57
// @version      1.1
// @updateURL    http://kaloncpu57.github.io/twitch-scripts/loader.js
// @description  Change your Twitch.tv username color in chat every time you post.
// @author       kaloncpu57
// @match        http*://www.twitch.tv/*
// @grant        none
// ==/UserScript==

var cyclerscript = document.createElement("script");
cyclerscript.src = "http://kaloncpu57.github.io/twitch-scripts/main.js";
document.head.appendChild(cyclerscript);
