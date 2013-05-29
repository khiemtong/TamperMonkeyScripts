// ==UserScript==
// @name       Roll20_JukeBoxHighlight
// @namespace  http://khiemtong.com/
// @version    0.5
// @description  Highlights currently playing songs on roll20 so that it's easily identified
// @match      https://app.roll20.net/*/*
// @copyright  2012+, Khiem Tong
// ==/UserScript==

// ==UserScript==
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

$(document).ready(function() {

    // add additional styling for pause buttons
    $('head').append('<style type="text/css">#jukebox .pause { color: red; }</style>');
    
});