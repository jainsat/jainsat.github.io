$(document).ready( function() {
    var c = $(".container");
    var h = ($(window).height() - c.height())/2;
    c.css("top", h + "px");
    $(".navbar").css("top", h + 10 + "px");
	function showName() {
	    var canvas = document.querySelector("canvas");
        var cxt = canvas.getContext("2d");
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        cxt.font = "80px Tangerine";
        cxt.fillStyle ="#ffffff";
        cxt.strokeStyle ="#ffffff";
        cxt.lineWidth=1;	
        var dashLenMax = 80,offset=3,x=30, y=90,text="Satya Jain",i=0, dashLen=0, dashSpace=dashLenMax;
        // Text will appear to animate if we draw it char by char and while
        // drawing a character, we first want to keep 0 dash length and max dash space.
        // Then by recursion, we keep increasing dash length and reduce dash space by
        // same factor. For. e.g. suppose max dash length is 300.
        // In the beginning, (dash len, dash space) will be (0, 300) then depending on
        // how fast we want our text to draw, we can decide some offset, say 10. So in
        // next turn, (len, space) will become (10,290) => (20,280)=>(30,270)......(300,0).
        function draw() {
            cxt.setLineDash([dashLen, dashSpace]); // create a long dash mask
            dashLen += offset;    // increase dash length.
            dashSpace -= offset;  // reduce dash space.
            cxt.strokeText(text[i], x, y);   // stroke letter.
            if (dashSpace >= 0) {
        	    requestAnimationFrame(draw);
            }
           else {
               cxt.fillText(text[i], x, y);
               x+=cxt.measureText(text[i]).width + cxt.lineWidth;
               i++;
               dashLen = 0;
               dashSpace = dashLenMax;
               if (i<text.length) {
	                requestAnimationFrame(draw);
               }  	
            }
        }
        draw();
    }
    const myFont = new FontFace('Tangerine', 'url(fonts/Tangerine.ttf)');
    myFont.load().then((font) => {
        document.fonts.add(font);
	    var canvas = document.querySelector("canvas");
        var cxt = canvas.getContext("2d");
        cxt.font = "80px Tangerine";
        cxt.fillStyle ="#ffffff";
        cxt.strokeStyle ="#ffffff";
        cxt.lineWidth=3;
        cxt.fillText("Welcome",60, 90);
        setTimeout(showName, 2500);
    });
 
 });