
// First create 4 windows
var win1 = window.open("", "Window 1", "width=300,height=300");
var win2 = window.open("", "Window 2", "width=300,height=300");
var win3 = window.open("", "Window 3", "width=300,height=300");
var win4 = window.open("", "Window 4", "width=300,height=300");

// Now create the fifth window with the layered colors
var win5 = window.open("", "Window 5", "width=300,height=300");
var ctx = win5.document.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 150);
ctx.fillStyle = "#00FF00";
ctx.fillRect(150, 0, 150, 150);
ctx.fillStyle = "#0000FF";
ctx.fillRect(0, 150, 150, 150);
ctx.fillStyle = "#FFFF00";
ctx.fillRect(150, 150, 150, 150);