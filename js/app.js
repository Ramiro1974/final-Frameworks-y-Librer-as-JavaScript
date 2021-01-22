$(document).ready(function(){
    //window.alert('estoy funcionando');
    
    $('.main-titulo').animate({
        color: "green",
    },1000,function(){
        $('.main-titulo').animate({
            color: "blue",
        },1000,function(){
            $('.main-titulo').animate({
                color: "pruple",
            },1000)
        })
    } 
    )
    //cambio de color titulo

       
});
$(function clor1(){
    $('.main-titulo').animate({ color: "PowderBlue", },100) 
});
$(function color2(){
    
            $('.main-titulo').animate({ color: "white", },100);

        //console.log("estoy entrando color");
    });