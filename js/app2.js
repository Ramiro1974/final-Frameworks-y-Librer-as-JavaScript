$(document).ready(function(){
    var consulta;
    $(".dulces").click(function(){
        consulta= $("img").attr("src");
        console.log("si esta funcionando");
        
    });
});
function eventoDulce(){
    console.log(consulta);
}



/**
$(function(){
    $(".dulces").click(function(){
        var consulta= $("img").attr("src");
        console.log("la movimiento es: "+consulta);
    });

    $(".panel-tablero").click(function(){
        var consulta2= $("img").attr("src");
        console.log("la movimiento es 2: "+consulta2);
    });
 
});*/