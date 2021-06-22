//variables 
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const clear = document.querySelector('#clean');
const conteo = document.querySelector('#conteo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

clear.addEventListener( 'click',limpiar)
//structura de busqueda 
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}


//llenar años 
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;

for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
//  

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarmodelos(autos);
});


// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarAutos(autos){
    
    limpiarHTML();
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('tr');
        autoHTML.innerHTML = `<tr>
           <td>  ${auto.marca} ${auto.modelo}</td> <td> ${auto.year}</td> <td >${auto.puertas} </td>   <td>${auto.transmision}</td> <td>${auto.precio} </td><td> ${auto.color} </td>
        </tr>`;
        contenedor.appendChild(autoHTML);
    })
    conteo.innerHTML=` ${autos.length} Resultados`;
}

function noResultado() {
    limpiarHTML();
    conteo.innerHTML=` 0 Resultados`;
    const contenedor = document.querySelector('#resultado');
    const noResultado = document.createElement('tr');
    noResultado.innerHTML = `<tr>  <td class="alerta error" colspan="6" style="text-align: center;"> <dic > Sin resultados </div> </td>  </tr>`
   contenedor.appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
 
   console.log(resultado);
    if(resultado.length){
         mostrarAutos(resultado);
    } else {
        noResultado();
    }
 }
 
 
 // Aplica los filtros
 function filtrarMarca(auto) {
     if(datosBusqueda.marca){
         return auto.marca === datosBusqueda.marca;
     } 
     return auto;
 }
 function filtrarYear(auto) {
     if(datosBusqueda.year){
         return auto.year === datosBusqueda.year;
     }
     return auto;
 }
 
 function filtrarMinimo(auto) {
     if(datosBusqueda.minimo){
         return auto.precio >= datosBusqueda.minimo;
     }
     return auto;
 }
 function filtrarMaximo(auto) {
     if(datosBusqueda.maximo){
         return auto.precio <= datosBusqueda.maximo;
     }
     return auto;
 }
 function filtrarPuertas(auto) {
     if(datosBusqueda.puertas){
         return auto.puertas === datosBusqueda.puertas;
     }
     return auto;
 }
 
 function filtrarTransmision(auto) {
     if(datosBusqueda.transmision){
         return auto.transmision === datosBusqueda.transmision;
     } 
     return auto;
 }
 
 function filtrarColor(auto){
     if(datosBusqueda.color){
         return auto.color === datosBusqueda.color;
     } 
     return  auto;
 }

function llenarmodelos(autos)
{
    let datos = []
    let puerta = []
    let trasaccion = []
    let colorr = []
    autos.forEach(auto => {
    const aut = auto.marca; 
    const pt = auto.puertas;
    const tr = auto.transmision;
    const cl = auto.color;
   puerta= [...puerta,pt];
   trasaccion = [...trasaccion,tr];
   colorr= [...colorr,cl];
   datos = [...datos,aut];
 
   /* autos.forEach(auto => {
   const option =  document.createElement('option');
    option.value = auto.marca;
        option.innerText = auto.marca;
        marca.appendChild(option);
      */   
    })
    //marca
    const dataArr = new Set(datos);
    dataArr.forEach(m => { 
    const option =  document.createElement('option');
    option.value = m;
        option.innerText = m;
        marca.appendChild(option);
    })
    //color
    const dataArr1 = new Set(colorr);
    dataArr1.forEach(m => { 
        const option =  document.createElement('option');
        option.value = m;
            option.innerText = m;
            document.querySelector('#color').appendChild(option);
        })
   
   
    //transmicion
    const dataArr2 = new Set(trasaccion);
  
    dataArr2.forEach(m => { 
        const option =  document.createElement('option');
        option.value = m;
            option.innerText = m;
          
            document.querySelector(`#transmision`).appendChild(option);
        })
   
    //puertas
    const dataArr3 = new Set(puerta);
    dataArr3.forEach(m => { 
        const option =  document.createElement('option');
        option.value = m;
            option.innerText = m;
            document.querySelector('#puertas').appendChild(option);
        })
  
     
}

function limpiar()
{
    location.reload();
}