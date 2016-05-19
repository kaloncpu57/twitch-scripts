// ==UserScript==
// @name         Twitch Color Cycler
// @namespace    https://twitch.tv/kaloncpu57
// @version      1.2.1
// @updateURL    https://kaloncpu57.github.io/twitch-scripts/cycler/load.user.js
// @description  Change your Twitch.tv username color in chat every time you post.
// @author       kaloncpu57
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

window.onload = function () {
  var cyclerscript = document.createElement("script");
  cyclerscript.src = "https://kaloncpu57.github.io/twitch-scripts/cycler/main.js";
  document.head.appendChild(cyclerscript);
};
