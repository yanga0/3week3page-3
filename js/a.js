/**
 * Created by yangao on 1/28/15.
 */

$('.background').mousemove(function(event) {
    var top = 50 + (event.clientY - $(Window).height()/2)*3/($(Window).height()/2);
    var left = 50 + (event.clientX - $(Window).width()/2)*3/($(Window).width()/2);
    $(this).css({
        "background-position" : "" + left + "% " + top + "%"
    });
})
