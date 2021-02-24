$(function color1() {
    $('.main-titulo').animate({
        color: "green",
    }, 1000, function() {
        color2();
    });

    function color2() {
        $('.main-titulo').animate({
            color: "blue",
        }, 1000, function() {
            color3();
        });
    }

    function color2() {
        $('.main-titulo').animate({
            color: "pruple",
        }, 1000, function() {
            color1();
        });
    }
});