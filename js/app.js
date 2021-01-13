$(document).ready(function(){
    //window.alert('estoy funcionando');
    $('.main-titulo').animate({
        color: "green",
    },1000,function(){
        $('.main-titulo').animate({
            color: "blue",
        },1000,function(){
            $('.main-titulo').animate({
                color: "yellow",
            },1000)
        })
    }
    )
    //cambio de color titulo

});