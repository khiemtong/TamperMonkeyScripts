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

	$(window).click(function(event) {
        // grab the pause button class and change the color of it's grandparent,
        // which is the containing div with title and other contents.
        $('.pause').parent().parent().css('background-color','#9c9');        
	});    
    
});