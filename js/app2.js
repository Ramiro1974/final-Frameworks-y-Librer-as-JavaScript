
var col;
var igual=[];

$("#dulcess").sortable();

$(document).ready(function(){
    var consulta;
    $("img").click(function(){
    consulta= $(this);
    });
    console.log(consulta);
});

function eventoDulce(cosa, col){
    
    var temp=cosa;
    igual.push(temp);
    var contadosCondicion=igual.length;
    if(contadosCondicion != 0 && contadosCondicion < 4){
        if(igual[0]===igual[1]===igual[3]){

        }else{
            console.log("diferente");
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