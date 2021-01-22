/** 
$(document).ready(function(){
    var cli='';
    $("img").click(function(){
        cli=$("img").html();
        console.log("el dulce es: "+cli);
     });
     console.log("el tiempo es: "+$("data-info").html());
});
*/
$(document).ready(function(){
    $(".main-titulo").click(function(){
        alert($(".main-titulo").html());
    });
});