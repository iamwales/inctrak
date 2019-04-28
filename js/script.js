$(document).ready(function() {
  //for easy scrolling
  $.scrollIt({
    upKey: 20, // key code to navigate to the next section 38
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 100, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -85 // offstet (in px) for fixed top navigation
  });

  //waypoint
  $(".aboutUs").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".addsticky").addClass("sticky");
      } else {
        $(".addsticky").removeClass("sticky");
      }
    },
    {
      offset: "300px;"
    }
  );

  new WOW().init();

  // $("a").click(function() {
  //   $(this)
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active");
  // });
});
