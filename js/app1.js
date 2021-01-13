$(function(){
    console.log("estoy funcionando");
    var z=0;
    var colum=0;
for(var i=1;i<5;i++ ){
    for(var h=1;h<8;h++){
        z='<img src="image/'+i+'.png">';
            colum=".col-"+h;
            $(colum).append(z);
            console.log(z);
            console.log(colum);
    } 
}

});