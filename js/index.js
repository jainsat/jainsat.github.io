$(document).ready( function() {
    var c = $(".container");
    var h = ($(window).height() - c.height())/2;
    c.css("top", h + "px");
    $(".navbar").css("top", h + 10 + "px");
	function showName() {
	    $(".center").text("Satya Jain");
    }
    setTimeout(showName, 2000);
 /* var canvas = document.getElementsByClassName("center")[0];
  var ctx=canvas.getContext("2d");


ctx.fillStyle="#ffffff";
ctx.textAlign="center";
ctx.fillText("Satya Jain", canvas.width/2, canvas.height/2);
/*ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
    (function loop() {
	     // use setTimeout() to execute
   

  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }

  })();*/

 
 });