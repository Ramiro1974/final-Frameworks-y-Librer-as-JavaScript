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
/**$(document).ready(function(){
    var consulta;
    var col;
    $("img").click(function(){
    //consulta= $(this)
    eventoDulce(consulta, col);
        
    });
});*/
var igual=[];

function eventoDulce(cosa, col){
    //alert(cosa);
    //alert(col);
    var temp=cosa;
    igual.push(temp);
    var contadosCondicion=igual.length;
    if(contadosCondicion != 0 && contadosCondicion < 4){
        if(igual[0]===igual[1]===igual[3]){
            $("img").removeAttr("");
        }else{
            alert("diferente");
        }
    }else{
        igual.splice(0,3);
        igual.pop();
        //alert("*** condicion no cumple ****");        
    } 
    igual.forEach(function(contenido){
        console.log(contenido);
    });
    console.log(igual.length);
}