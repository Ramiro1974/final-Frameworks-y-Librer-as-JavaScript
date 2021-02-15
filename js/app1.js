$(function(){ 
    var z=0;
    //var colum=0;
    var dulce=1;
    const coma=" ' ";

/**    for(var i=1;i<7;i++ ){
    for(var h=1;h<8;h++){
        dulce= Math.floor(Math.random() * (5 - 1) ) + 1;
        z='<img src="image/'+dulce+'.png" class="dulces">';
            colum=".col-"+h;
            $(colum).append(z);
    } 
} */
$(".panel-tablero").html(function(){
    //for(var i=1;i<7;i++ ){
        for(var h=1;h<25;h++){
            dulce= Math.floor(Math.random() * (5 - 1) ) + 1;            
            //colum=".col-"+h;
            //z='<img src="image/'+dulce+'.png" class="dulces" onclick="eventoDulce('+coma+dulce+coma+','+coma+colum+coma+')" style="margin:6px;">';
            z='<img src="image/'+dulce+'.png" class="dulces" onclick="eventoDulce('+coma+dulce+coma+')" style="margin:6px;">';
            $(this).append(z);
        }  
    //}
});
});