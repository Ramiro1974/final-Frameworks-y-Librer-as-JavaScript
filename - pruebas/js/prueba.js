window.onload=function numerosAleatorios(){
    var numero= Math.floor(Math.random() * 10);
    document.getElementById("cubo1").innerHTML=+numero;
    console.log(numero);
    document.getElementById("cubo2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("cubo3").innerHTML = "el texto";
}