$(function color1() {
    $('.main-titulo').animate({
        color: "green",
    }, 2000, function() {
        color2();
    });

    function color2() {
        $('.main-titulo').animate({
            color: "LightCyan",
        }, 2000, function() {
            color3();
        });
    }

    function color2() {
        $('.main-titulo').animate({
            color: "#DCFF0E",
        }, 2000, function() {
            color1();
        });
    }
});