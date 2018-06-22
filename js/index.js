$(document).ready( function() {
    $(".hexagon").animate({bottom: '-10%', width: '15px'},2000);
    function runHexagon()
    {
        $(".hexagon").animate({left: '0px'}, 500);
    }
	function showName() {
		$(".center").text("Satya Jain");
        $(".hexagon").css({display:"none"});
        $(".navbar").css({display:"flex"});
    }
    setTimeout(showName, 2500);
    setTimeout(runHexagon,2000);
 });