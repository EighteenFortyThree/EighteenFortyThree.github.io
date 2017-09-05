// to anywhere
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

// to the top (a tag's href="#")
$('#toTheTop').click(function(event){
  event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});

// scroll to top
/*
.upArrow{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    background-color: grey;
    color: white;
    padding: 15px;
}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="js/scroll.js"></script>
*/
$(window).on("scroll", function() {
    if ($(window).scrollTop() <= 0) {
        $(".upArrow").fadeOut();
    } else {
        $(".upArrow").fadeIn();
    }
});
