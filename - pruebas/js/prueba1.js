$(function(){
    //$("#cubo1").append('<img src="image/1.png">');
    $("#cubo1").html('<img src="image/1.png" onclick="pruebaR2('+5+')">');
    console.log("attr");
});
function pruebaR2(parametro){
    alert('<p>el parametro es: ' +parametro+ '</p>');
    }
    function pruebaR(parametro){
        alert('<p>el parametro es: ' +parametro+ '</p>');
        }