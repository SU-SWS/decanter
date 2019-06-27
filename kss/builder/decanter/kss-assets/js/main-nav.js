/**
 * [navmap description]
 * @type {[type]}
 */
(function($) {
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

  // Indent third level items a bit.
  var last_child = 1;
  $(".kss-nav__ref-child, .kss-nav__ref").each(function(i, v) {
    var count = $(v).text().match(/\./g);
    var depth = 0;

    if (count !== null) {
      depth = count.length;
    }

    if (depth >= 1) {
      $(v).parent().parent().addClass('child-nav-level-' + depth);
    }

    if (depth == 4 && last_child == 3) {
      $(v).parent().parent().prev().find("a").addClass("separator-child");
    }

    if (depth == 3 && last_child == 2) {
      $(v).parent().parent().prev().find("a").addClass("separator-child");
    }

    if (depth == 2 && last_child == 1) {
      $(v).parent().parent().prev().find("a").addClass("separator-child");
    }

    last_child = depth;
  });

  $(window).scroll();
})(jQuery);
