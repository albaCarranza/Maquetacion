
// //aquí declaro name para imprimir nombre en consola de google al clicar
// function getname() {

//     let nombre = document.getElementById('nombre').value;
//     console.log(nombre);
// }

// // //aquí declaro origen para imprimir origen en consola de google al clicar
// function getorigen() {

//     let origen = document.getElementById('origen').value;
//     console.log(origen);
// }

// //aquí declaro destino para imprimir destino en consola de google al clicar
// function getdestino() {

//     let destino = document.getElementById('destino').value;
//     console.log(destino);
// }

// //aquí declaro personas para imprimir personas en consola de google al clicar
// function getpersonas() {

//     let personas = document.getElementById('personas').value;
//     console.log(personas);
// }

// //aquí declaro fecha para imprimir fecha en consola de google al clicar
// function getfecha() {

//     let fecha = document.getElementById('fecha').value;
//     console.log(fecha);
// }

//aquí creo un objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
// "solicitar información".

let form = []

function Section() {
    let nombre = document.getElementById('nombre').value.toLowerCase()
    let origen = document.getElementById('origen').value.toLowerCase()
    let destino = document.getElementById('destino').value.toLowerCase()
    let personas = document.getElementById('personas').value.toLowerCase()
    let fecha = document.getElementById('fecha').value.toLowerCase()



    let viajero = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: personas,
        fecha: fecha,
    }
    form.push(viajero)
    console.log(form);


}

// segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos
// muestre por consola la información de las solicitudes recibidas que tengan como destino
// Canarias, Mallorca o Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
// mayuscula o minuscula).

let filtrar = []

function Filtrar() {

    let viajeritos = form.filter((filtrar) => ((filtrar.destino == "mallorca") || (filtrar.destino == "canarias") || (filtrar.destino == "galicia")))

    filtrar.push(viajeritos)
    console.log(filtrar);
}

// let imprimir = ''

// for(i = 0 <Section.length )