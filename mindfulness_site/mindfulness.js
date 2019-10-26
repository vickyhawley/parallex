$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $(".hero").css({
        'background-size' : 100 + scrollPos + '%'
    });
});