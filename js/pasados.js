var fechaActual = []
var pasados = []
var datos = [];

async function getData2() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json =>{datos.push(json)})
    console.log(datos);
    console.log(datos[0].fechaActual);
    fechaActual.push(datos[0].fechaActual);
    pasados.push(...datos[0].eventos.filter(item =>item.date < fechaActual));
    console.log(pasados);

    
    displayFicha(pasados)
}
getData2();

function displayFicha(data){ /* se deja por separado las funciones que modifican el dato */
    let toDisplay = [];
    if(data && data.length > 0){
        toDisplay.push(...data);
    }else{
        toDisplay.push(datos);
    }
console.log(toDisplay)
    var html = "";

    toDisplay.map(lista =>{ 

        html += `
        <div style="background-image: url(${lista.image});" class="tarjeta">
        <div class="elementos__target">
            <h2 class="titulo__secundario__target">${lista.name}</h2>  
            <p class="parrafo2__target">${lista.description}</p>
            <p class="parrafo3__target">${lista.category}</p>
            <p class="parrafo2__target">${lista.place}</p>
            <p class="parrafo2__target">Fecha: ${lista.date}</p>
            <p class="parrafo4__target">$: ${lista.price}</p>
        </div>
        </div>    
        `
    })


document.querySelector("#mainCards").innerHTML = html;

}