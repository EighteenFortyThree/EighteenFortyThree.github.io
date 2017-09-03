$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {
                    var elem = $(this.hash);
                    elem = elem.length ? elem : $('[name=' + this.hash.slice(1) +']');
                    if (elem.length) {
                        $(elem).animate({
                            scrollTop: elem.offset().top
                        }, 1200);
                        return false;
                    }
        }
});
