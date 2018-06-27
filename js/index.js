$(document).ready( function() {
    $(".hexagon").animate({bottom: '-10%', width: '15px'},2000);
    setTimeout(showName, 2500);
    setTimeout(runHexagon,2000);
    var leaf_width = $(".leaf").width();
    $(".active-section-1").css({width: leaf_width*0.7});
    $(".active-section-2").css({width: leaf_width*0.9});
    $(".active-section-3").css({width: leaf_width*0.5});
    $(".active-section-4").css({width: leaf_width*0.1});
    $(".active-sections").mouseover(rotateLeaf, null);

    function runHexagon()
    {
        $(".hexagon").animate({left: '0px'}, 500);
    }
	function showName()
    {
		$(".center").text("Satya Jain");
        $(".hexagon").css({display:"none"});
        $(".navbar").css({display:"flex"});
    }
    function rotateLeaf()
    {
        $(".leaf").css({transform: "rotate(-45deg)"});
    } 


 });