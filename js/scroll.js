$('a[href*=#]:not([href=#])').click(function(event) {
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var elem = $(this.hash);
      elem = elem.length ? elem : $('[name=' + this.hash.slice(1) + ']');
      if (elem.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: elem.offset().top
        }, 1200, function() {
          var $to = $(elem);
          $to.focus();
          if ($to.is(":focus")) {
            return false;
          } else {
            $to.attr('tabindex','-1');
            $to.focus();
          };
        });
      }
    }
});
