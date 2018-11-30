/**
 * [navmap description]
 * @type {[type]}
 */
(function($) {

  // Set the active nav item in the main menu.
  var pathname = window.location.pathname;
  if (pathname.length && pathname !== "/") {
    $(".main-nav").find("a[href*='" + pathname + "']").addClass('active');
  }
  else {
    $(".main-nav a").eq(0).addClass('active');
  }

  // Scroll the sidebar to stay in the window.
  // Todo: move this to a file not called main-nav.js
  $(window).scroll(function() {
    var offset = $("html")[0].getBoundingClientRect().top * -1;
    if (offset > 99) {
      $(".kss-sidebar .scrollable").css('top', (offset - 79) + "px");
    }
    else {
      $(".kss-sidebar .scrollable").css('top', "0px");
    }
  });

  $(window).scroll();
})(jQuery);
