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
var igual=[];
$(document).ready(function(){
    var consulta;
    $("img").click(function(){
        consulta= $(this)
        eventoDulce(consulta);
        
    });
});
function eventoDulce(cosa){
    var temp=cosa; 
    const temp={

    }
    igual.push(temp);
    var contadosCondicion=igual.length;
    if(contadosCondicion != 0 && contadosCondicion >= 2){
        if(igual[0]===igual[1]){
            alert("igual");
        }else{
            alert("diferente");
        }
    }else{
        alert("se encuentra null");        
    } 
    for(var i=0 ; i< igual.length ; i++){
        console.log("el elemento es: "+igual[i])+"\n";
    }
    
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

