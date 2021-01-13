$(function(){
    var z=0;
    var colum=0;
    var dulce=1;
for(var i=1;i<7;i++ ){
    for(var h=1;h<8;h++){
        dulce= Math.floor(Math.random() * (5 - 1) ) + 1;
        z='<img src="image/'+dulce+'.png">';
        console.log(dulce);
            colum=".col-"+h;
            $(colum).append(z);
    } 
}
});