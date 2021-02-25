var z = '';
var dulceslleno = [];
var colum = 0;
const dulces = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png'];
const coma = " ' ";
const cssDulce = 'style="margin-bottom: 15px; width: 100%;"';
$(function() {
    var id = 1;
    for (var n = 1; n < 8; n++) {
        colum = ".col-" + n;
        for (var h = 1; h < 6; h++) {
            dulce = Math.floor(Math.random() * (4 - 0)) + 0;
            z = '<img id="' + id + '" ' + cssDulce + 'src="' + dulces[dulce] + '" class="dulces" onclick="eventoDulce(' + coma + dulce + coma + ',' + coma + colum + coma + ')">';
            dulceslleno.push(z);
            $(colum).append(dulceslleno[id - 1]);
            id = id + 1;
        }

    }
});