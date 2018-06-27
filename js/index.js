$(document).ready( function() {
    $(".hexagon").animate({bottom: '-10%', width: '15px'},2000);
    setTimeout(showName, 2500);
    setTimeout(runHexagon,2000);
    var leaf_width = $(".leaf").width();
    var leaf_container_width = $(".img-helper").width();
    $(".active-section-1").css({width: leaf_width*0.7, left: leaf_container_width/2 - leaf_width*0.7/2});
    $(".active-section-2").css({width: leaf_width*0.9, left: leaf_container_width/2 - leaf_width*0.9/2});
    $(".active-section-3").css({width: leaf_width*0.5, left: leaf_container_width/2 - leaf_width*0.5/2});
    $(".active-section-4").css({width: leaf_width*0.1, left: leaf_container_width/2 - leaf_width*0.1/2});
    $(".active-sections").hover(function() {rotateLeaf(-45);}, function() {rotateLeaf(0);});

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
    function rotateLeaf(angle)
    {
        $(".leaf").css({transform: "rotate("+ angle + "deg)"});
    } 


 });