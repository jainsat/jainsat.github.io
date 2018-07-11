
$(document).ready(function() {
    // code for the isElementInViewport function

      window.addEventListener("scroll", show);
      function  show()
      {
          var avg_height = 0;
          var items = document.querySelectorAll(".timeline ul li");
          for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                  items[i].classList.add("in-view");
                  //alert("in view " + i);
                  var item_height = items[i].firstElementChild.clientHeight;
                  // Min distance between li elements = 200px
                  if (item_height < 200) {
                      items[i].firstElementChild.style.marginTop =  (200 - item_height) + "px";
                  }
              }
          }


      }

    function isElementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    show();
});


//window.addEventListener("load", callbackFunc);
//swindow.addEventListener("scroll", callbackFunc);