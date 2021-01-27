function aleatorio(max, min) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

//(Start) Carga del fondo y de los animales.
function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}
//(End) Carga del fondo y de los animales.

//(Start) dibujo del fondo y dibujo aleatorio de animales.
function dibujar() {
    papel.clearRect(origenX, origenY, anchovp, altovp);
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (var v = 0; v < cantidadVacas; v++) {
            var x = aleatorio(origenX, 6);
            var y = aleatorio(origenY, 6);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        for (var p = 0; p < cantidadPollo; p++) {
            var x = aleatorio(origenX, 6);
            var y = aleatorio(origenY, 6);
            var x = x * 75;
            var y = y * 75;
            papel.drawImage(pollo.imagen, x, y); 
        }
    }
    if (cerdo.cargaOK) {
        for (var c = 0; c < cantidadCerdo; c++) {
            var x = aleatorio(origenX, 6);
            var y = aleatorio(origenY, 6);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y); 
        }
    }
}
//(End) Dibujo del fondo y dibujo aleatorio de los animales.

//(Start) Mover cerdo.
function moverCerdo(evento) {
    papelCerdo.clearRect(x, y, anchoPC, altoPC);
    var teclaPrecionada = evento.keyCode;
    switch (teclaPrecionada) {
        case tecla.LEFT:
            papelCerdo.drawImage(cerdo.imagen, x - movimiento, y);
            x = x - movimiento;
            break;
        case tecla.UP:
            papelCerdo.drawImage(cerdo.imagen, x, y - movimiento);
            y = y - movimiento;
            break;
        case tecla.RIGTH:
            papelCerdo.drawImage(cerdo.imagen, x + movimiento, y);
            x = x + movimiento;
            break;
        case tecla.DOWN:
            papelCerdo.drawImage(cerdo.imagen, x, y + movimiento);
            y = y + movimiento;
            break;
    }
}
//(End) Mover cerdo.

//(Start) Agregar cerdo.
function agregarCerdo() {
    papelCerdo.drawImage(cerdo.imagen, x, y);
    cerdo.movil = true;
    document.addEventListener("keyup", moverCerdo);
}
//(End) agregar cerdo.

//<--Start Main-->
var x, y, movimiento;
x = 210;
y = x;
movimiento = 40;
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var anchovp = vp.width;
var altovp = vp.height;
var limiteX = anchovp - 80;
var limiteY = altovp - 80;

var canvasCerdo = document.getElementById("canvasCerdo");
var papelCerdo = canvasCerdo.getContext("2d");
var anchoPC = canvasCerdo.width;
var altoPC = canvasCerdo.height;

var botonCerdo = document.getElementById("botonCerdo");
botonCerdo.addEventListener("click", agregarCerdo);

var origenX = 0;
var origenY = 0;


var fondo = {
    url: "Images/tile.png",
    cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "Images/vaca.png",
    cargaOK: false,
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
var cantidadVacas = aleatorio (1, 24);

var pollo = {
    url: "Images/pollo.png",
    cargaOk: false
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
var cantidadPollo = aleatorio(1, 24);

var cerdo = {
    url: "Images/cerdo.png",
    cargaOk: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
var cantidadCerdo = aleatorio(1, 24);

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40
}
//<--(End) Main -->