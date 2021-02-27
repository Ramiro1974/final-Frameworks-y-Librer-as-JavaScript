var dulceslleno = [];
var colum = 7;
var fila = 7;
const dulces = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png'];
var validFigures = 0;
var score = 0;
var moves = 0;
var width = $('.panel-tablero').width();
var height = $('.panel-tablero').height();
var cellWidth = width / 7;
var cellHeight = height / 7;
var marginWidth = cellWidth / 7;
var marginHeight = cellHeight / 7;

$(".btn-reinicio").click(function() {
    i = 0;
    score = 0;
    mov = 0;
    $(".panel-score").css("width", "25%");
    $("#score-text").html("0");
    $("#movimientos-text").html("0");
    $(this).html("REINICIAR");
    $('#timer').timer({
        countdown: true,
        duration: '2m',
        format: '%M:%S',
        callback: function() {
            $(".panel-tablero").remove();
            //alert('Time up!');
            $(".panel-score").removeAttr("with");
            $(".panel-score").css("with", "100%");
            $('#timer').timer('reset');
        }
    });
});

function cambioPantalla() {
    $(".panel-score").remove(function() {});

}








function candy(fil, colum, obj, src) {
    return {
        fil: r,
        colum: c,
        src: src,
        locked: false,
        isInCombo: false,
        o: obj
    }
}


// función que devuelve un caramelo aleatorio.
function pickRandomCandy() {
    var pickInt = Math.floor((Math.random() * 4));
    return dulces[pickInt];
}

// preparando el tablero
for (var r = 0; r < fila; r++) {
    dulceslleno[r] = [];
    for (var c = 0; c < colum; c++) {
        dulceslleno[r][c] = new candy(r, c, null, pickRandomCandy());
    }
}


// creando imagenes en el tablero
for (var r = 0; r < fila; r++) {
    for (var c = 0; c < colum; c++) {
        var cell = $("<img class='candy' id='candy_" + r + "_" + c + "' r='" + r + "' c='" + c +
            "'ondrop='_onDrop(event)' ondragover='_onDragOverEnabled(event)'src='" +
            dulceslleno[r][c].src + "' style='height:" + cellHeight + "px'/>");
        cell.attr("ondragstart", "_ondragstart(event)");
        $(".col-" + (c + 1)).append(cell);
        dulceslleno[r][c].o = cell;
    }
}

reponer();
reponer();

// el boton iniciar va a llevar a cero estos valores, asi q dsps lo tengo que borrar:
score = 0;
moves = 0;
$("#score-text").html("0");
$("#movimientos-text").html("0");

// cuando se hace click sobre un candy
function _ondragstart(a) {
    a.dataTransfer.setData("text/plain", a.target.id);
}

// cuando se mueve una gema por encima de otra sin soltarla 
function _onDragOverEnabled(e) {
    e.preventDefault();
    //console.log("pasando sobre caramelo " + e.target.id);
}

// cuando soltas una gema sobre otra
function _onDrop(e) {
    // solo para firefox
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox) {
        e.preventDefault();
    }

    // obtener origen del candy
    var src = e.dataTransfer.getData("text");
    var sr = src.split("_")[1];
    var sc = src.split("_")[2];

    // obtener destino del candy
    var dst = e.target.id;
    var dr = dst.split("_")[1];
    var dc = dst.split("_")[2];

    // si la distancia es mayor a 1, no permitir el movimiento y alertar
    var ddx = Math.abs(parseInt(sr) - parseInt(dr));
    var ddy = Math.abs(parseInt(sc) - parseInt(dc));
    if (ddx > 1 || ddy > 1) {
        return;
    } else {
        console.log("intercambio " + sr + "," + sc + " to " + dr + "," + dc);
        // intercambio de gemas
        var tmp = dulceslleno[sr][sc].src;
        dulceslleno[sr][sc].src = dulceslleno[dr][dc].src;
        dulceslleno[sr][sc].o.attr("src", dulceslleno[sr][sc].src);
        dulceslleno[dr][dc].src = tmp;
        dulceslleno[dr][dc].o.attr("src", dulceslleno[dr][dc].src);

        // sumar un movimiento a mi cantidad
        moves += 1;
        $("#movimientos-text").html(moves);

        //buscar combinaciones
        destruirCombos();

    }


}


// buscar combinaciones horizontales y verticales para destruirlas
function destruirCombos() {

    // busqueda horizontal


    for (var r = 0; r < fila; r++) {


        var prevCell = null;
        var figureLen = 0;
        var figureStart = null;
        var figureStop = null;

        for (var c = 0; c < colum; c++) {

            // saltear candys locked o que estan en combo.    
            if (dulceslleno[r][c].locked || dulceslleno[r][c].isInCombo) {
                figureStart = null;
                figureStop = null;
                prevCell = null;
                figureLen = 1;
                continue;
            }

            // primer objeto del combo
            if (prevCell == null) {
                prevCell = dulceslleno[r][c].src;
                figureStart = c;
                figureLen = 1;
                figureStop = null;
                continue;
            } else {
                // segundo o posterior objeto del combo
                var curCell = dulceslleno[r][c].src;
                if (!(prevCell == curCell)) {
                    prevCell = dulceslleno[r][c].src;
                    figureStart = c;
                    figureStop = null;
                    figureLen = 1;
                    continue;
                } else {
                    // incrementar combo
                    figureLen += 1;
                    if (figureLen == 3) {
                        validFigures += 1;
                        score += 10;
                        $("#score-text").html(score);
                        figureStop = c;
                        console.log("Combo de columna " + figureStart + " a columna " + figureStop);
                        for (var ci = figureStart; ci <= figureStop; ci++) {

                            dulceslleno[r][ci].isInCombo = true;
                            dulceslleno[r][ci].src = null;
                        }
                        prevCell = null;
                        figureStart = null;
                        figureStop = null;
                        figureLen = 1;
                        continue;
                    }
                }
            }

        }
    }

    // busqueda vertical


    for (var c = 0; c < colum; c++) {
        var prevCell = null;
        var figureLen = 0;
        var figureStart = null;
        var figureStop = null;

        for (var r = 0; r < fila; r++) {

            if (dulceslleno[r][c].locked || dulceslleno[r][c].isInCombo) {
                figureStart = null;
                figureStop = null;
                prevCell = null;
                figureLen = 1;
                continue;
            }

            if (prevCell == null) {
                prevCell = dulceslleno[r][c].src;
                figureStart = r;
                figureLen = 1;
                figureStop = null;
                continue;
            } else {
                var curCell = dulceslleno[r][c].src;
                if (!(prevCell == curCell)) {
                    prevCell = dulceslleno[r][c].src;
                    figureStart = r;
                    figureStop = null;
                    figureLen = 1;
                    continue;
                } else {
                    figureLen += 1;
                    if (figureLen == 3) {
                        validFigures += 1;
                        score += 10;
                        $("#score-text").html(score);
                        figureStop = r;
                        for (var ci = figureStart; ci <= figureStop; ci++) {

                            dulceslleno[ci][c].isInCombo = true;
                            dulceslleno[ci][c].src = null;
                        }
                        prevCell = null;
                        figureStart = null;
                        figureStop = null;
                        figureLen = 1;
                        continue;
                    }
                }
            }

        }
    }


    // destruir combos

    var isCombo = false;
    for (var r = 0; r < fila; r++)
        for (var c = 0; c < colum; c++)
            if (dulceslleno[r][c].isInCombo) {
                isCombo = true;
                //dulceslleno[r][c].animate({ slideDown(500) }, 1000);
                reponer()
            }

    if (isCombo)
        desaparecerCombos();




}

//desaparecer candys borrados
function desaparecerCombos() {
    for (var r = 0; r < fila; r++) {
        for (var c = 0; c < colum; c++) {
            if (dulceslleno[r][c].isInCombo) {
                dulceslleno[r][c].o.animate({
                    opacity: 100
                }, 1000);
            }
        }
    }
}

function reponer() {
    // mover celdas vacias hacia arriba
    for (var r = 0; r < fila; r++) {
        for (var c = 0; c < colum; c++) {
            if (dulceslleno[r][c].isInCombo) // celda vacia
            {
                dulceslleno[r][c].o.attr("src", "");
                // deshabilitar cerlda del combo               
                dulceslleno[r][c].isInCombo = false;

                for (var sr = r; sr >= 0; sr--) {
                    if (sr == 0) break;
                    if (dulceslleno[sr - 1][c].locked) break;
                    var tmp = dulceslleno[sr][c].src;
                    dulceslleno[sr][c].src = dulceslleno[sr - 1][c].src;
                    dulceslleno[sr - 1][c].src = tmp;
                }
            }
        }
    }

    // reordenando y reponiendo celdas
    for (var r = 0; r < fila; r++) {
        for (var c = 0; c < colum; c++) {
            dulceslleno[r][c].o.attr("src", dulceslleno[r][c].src);
            dulceslleno[r][c].o.css("opacity", "1"); // acá podria meter animate
            dulceslleno[r][c].isInCombo = false;
            if (dulceslleno[r][c].src == null)
                dulceslleno[r][c].respawn = true;
            if (dulceslleno[r][c].respawn == true) {
                dulceslleno[r][c].o.off("ondragover");
                dulceslleno[r][c].o.off("ondrop");
                dulceslleno[r][c].o.off("ondragstart");
                dulceslleno[r][c].respawn = false; // repuesto!
                dulceslleno[r][c].src = pickRandomCandy();
                dulceslleno[r][c].locked = false;
                dulceslleno[r][c].o.attr("src", dulceslleno[r][c].src);
                dulceslleno[r][c].o.attr("ondragstart", "_ondragstart(event)");
                dulceslleno[r][c].o.attr("ondrop", "_onDrop(event)");
                dulceslleno[r][c].o.attr("ondragover", "_onDragOverEnabled(event)");
            }
        }
    }
    destruirCombos();

}