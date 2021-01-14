import Comida from './Comida.js'
import Servicio from './Servicio.js'
import Orden from './Orden.js'

/* let chicharron = new Comida('Chicharrón', 15, 50)
let suadero = new Comida('Suadero', 15, 50)
let rajas = new Comida('Rajas', 15, 50)

let menu = []
let comidas = Servicio.menu.push(chicharron, suadero, rajas) */
let menu = document.getElementById('menu')
let 

let ordenes = []

let pedido = document.getElementById('pedido')
let costo = document.getElementById('costo')

let agregarOrden = document.getElementById('agregarOrden')
agregarOrden.addEventListener('click', Servicio.newOrder)

let ordenar = document.getElementById('ordenar')
ordenar.addEventListener('click', validar)

function validar(){
for(let i = 0; i < ordenes.length; i++){
  ordenes[i].evaluar()
}
informacion()
}

function informacion(){
if(listo.length === ordenes.length){
  agregarOrden.removeEventListener('click', Servicio.newOrder)
  /* infoCliente.style.display = 'flex'
  siguiente.removeEventListener('click', validar)
  ordenar.style.display = 'flex'*/
  ordenar.removeEventListener('click', validar) 
  desplegarTicket()
}else{
  var eliminarPlatos = arrayDePlatos.splice(0, arrayDePlatos.length)
  var eliminarValores = arrayDeValores.splice(0,arrayDeValores.length)
  var eliminarSubtotales = arrayDeSubtotales.splice(0, arrayDeSubtotales.length)
  var eliminarListo = listo.splice(0, listo.length)
  let formulario = document.getElementById('formulario')
  if(formulario){
    pedido.removeChild(formulario)
  }
}
}

function desplegarTicket(){
let total = 0
arrayDeSubtotales.forEach(function(a){total += a;});
let price = document.createElement('h2')
price.classList.add('price')
costo.appendChild(price)
price.innerHTML = `$${total}.00`
ticket.style.display = 'block'
console.log(ordenes)
ordenar.removeEventListener('click', desplegarTicket)
}



let arrayDePlatos = []
let arrayDeValores = []

let listo = []



let menuDelDia = document.getElementById('menu-del-dia')
let pregunta = document.getElementById('pregunta')
let contact = document.getElementById('contacto')

let contenido = document.getElementById('contenido')
let barMenu = document.getElementById('bar-menu')
let hero = document.getElementById('hero')
let comanda = document.getElementById('comanda')
let contactMe = document.getElementById('contactMe')

function resaltar(id){
  id.classList.add('yellow')
}
function quitarResaltar(id){
  id.classList.remove('yellow')
}

function goHero(){
  resaltar(menuDelDia)
  quitarResaltar(pregunta)
  quitarResaltar(contact)

}
function goComanda(){
    resaltar(pregunta)
    quitarResaltar(menuDelDia)
    quitarResaltar(contact)

}
function goContact(){
    resaltar(contact)
    quitarResaltar(menuDelDia)
    quitarResaltar(pregunta)
}



function changeBar(){
   if(contenido.scrollTop < hero.offsetHeight){
     resaltar(menuDelDia)
   }if(contenido.scrollTop > hero.clientHeight-300){
     quitarResaltar(menuDelDia)
     resaltar(pregunta)
   }if(contenido.scrollTop < comanda.clientHeight-400){
     quitarResaltar(pregunta)
   }if(contenido.scrollTop >= contactMe.offsetTop-400){
     resaltar(contact)
     quitarResaltar(pregunta)
   }if(contenido.scrollTop <= contactMe.offsetTop-400){
     quitarResaltar(contact)
   }
   console.log()
}

