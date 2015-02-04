/**
 * Created by yangao on 1/28/15.
 */

$('.background').mousemove(function(event) {
    var top = 50 + (event.clientY - $(window).height()/2)*3/($(window).height()/2);
    var left = 50 + (event.clientX - $(window).width()/2)*3/($(window).width()/2);
    $(this).css({
        "background-position" : "" + left + "% " + top + "%"
    });
});

var prevTop = 0, currTop = 0;
$(window).scroll(function() {
    currTop = $(window).scrollTop() + 1;
    var nav = $('#top-nav');
    if (currTop > 120) {
        if (!nav.hasClass('scrolled')) nav.removeClass('nav-down').addClass('nav-up').addClass('scrolled');
    }
    else
        nav.removeClass('nav-up').removeClass('scrolled').addClass('nav-down');

    if(currTop < prevTop && nav.hasClass('scrolled')) nav.removeClass('nav-up').addClass('nav-down');
    if(nav.hasClass('scrolled') && nav.hasClass('nav-down') && currTop >= prevTop) nav.removeClass('nav-down').addClass('nav-up');

    if(currTop > 1500) {
        $('.single-pic-dynamic img').addClass('bright').css('position', 'relative').css('top', "" + (currTop-1500) + "px");
    }
    else {
        $('.single-pic-dynamic img').removeClass('bright').css('top', "0");
    }
    setTimeout(function(){prevTop = currTop},0);
});