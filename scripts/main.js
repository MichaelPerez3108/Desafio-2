'use strict';
const btnValidar = document.getElementById('btnValidar');
const btnIngresar = document.getElementById('ingresar');
function cambiar(){
    const imagen = document.getElementById('imagen');
    const clase = imagen.getAttribute("class")
    if( clase === "imagen"){
        imagen.setAttribute("class","imagenex1change");
    }else{
        imagen.setAttribute("class","imagen");
    }
}

function validar(){
    const in1 = parseFloat(document.getElementById('valor1').value);
    const in2 = parseFloat(document.getElementById('valor2').value);
    const in3 = parseFloat(document.getElementById('valor3').value);
    const contenedor = document.getElementById('contenedorValid');
    const texto = document.getElementById('texto');
    let suma;

    suma = (in1+in2+in3);
    if(suma <= 10){
        texto.innerHTML = `Llevas ${suma} stikers.`;
    }else if(suma > 10){
        texto.innerHTML = `Llevas demasidos stikers: ${suma} .`;
    }else {
        texto.innerHTML = `Tienes que poner la cantidad.`;
    }
};
    

function ingresar(){
    const select1 = document.getElementById('val1').value;
    const select2 = document.getElementById('val2').value;
    const select3 = document.getElementById('val3').value;
    const texto = document.getElementById('parrafo');
    const patron = (select1+select2+select3);
    if(patron == '911'){
        texto.innerHTML = `Password 1 Correcto`;
    }else if(patron == '714'){
        texto.innerHTML = `Password 2 Correcto`;
    }else{
        texto.innerHTML = `Password Incorrecto`;
    }
}