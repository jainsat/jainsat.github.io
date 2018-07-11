
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
                  var item_height = items[i].firstElementChild.clientHeight;
                  // Min distance between li elements = 200px
                  if (item_height < 200) {
                      items[i].firstElementChild.style.marginTop =  (200 - item_height) + "px";
                  }
              }
          }


      }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    show();
});


//window.addEventListener("load", callbackFunc);
//swindow.addEventListener("scroll", callbackFunc);