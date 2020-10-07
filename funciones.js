
let chicharron = new comida('Chicharrón', 'Taco', 0, 50, 15.00)
let suadero = new comida('Suadero', 'Taco', 0, 50, 15.00)
let rajas = new comida('Rajas', 'Taco', 4, 50, 15.00)
  let menu = []
    let comidas = menu.push(chicharron, suadero, rajas)

function comida(nombre, presentacion, picoso, cantidad, precio){
  this.nombre = nombre
  this.presentacion = presentacion
  this.picoso = picoso
  this.cantidad = cantidad
  this.precio = precio
}
/* var nombreMenu = menu.map(function(menu){return ' ' + menu.nombre})
var preciosMenu = menu.map(function(menu){return menu.precio})
 */
const opcionInput = document.getElementsByClassName('opcionInput')
const opcionUno = document.getElementById('opcion1Input')
const opcionDos = document.getElementById('opcion2Input')
const opcionTres = document.getElementById('opcion3Input')

const tuOrden = document.getElementById('tuOrden')
const avisoTacos = document.getElementById('avisoTacos')
const guisado1 = document.getElementById('opcion1')
const guisado2 = document.getElementById('opcion2')
const guisado3 = document.getElementById('opcion3')
/*   let formulario = document.getElementById('elegir')
  console.log(formulario) */
const avisoCheck = document.getElementById('avisoCheck')
const checkbox1 = document.getElementById('verificar1')
const checkbox2 = document.getElementById('verificar2')
const checkbox3 = document.getElementById('verificar3')
const checkbox4 = document.getElementById('verificar4')
checkbox1.addEventListener('change', this.cambio1)
checkbox2.addEventListener('change', this.cambio2)
checkbox3.addEventListener('change', this.cambio3)
checkbox4.addEventListener('change', this.cambio4)
let cambios = [cambio1, cambio2, cambio3, cambio4]
let checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4]  
/*   var checkboxesChecked = checkboxes.map(function(checkboxes){return checkboxes.checked}) */
const agregarOrden = document.getElementById('agregarOrden')
agregarOrden.addEventListener('click', nuevaOrden)
const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", evaluar);
let ticket = document.getElementById('ticket')

class Servicio{
  constructor(){
    this.comida
    this.cambio1
    this.cambio2
    this.cambio3
    this.cambio4
    this.levantarPedido
    this.opcion = {
      opcionUno,
      opcionDos,
      opcionTres
    }
    this.convertirStringsANumeros
  }
}
  function nuevaOrden(){
    var elegir = document.getElementById('elegir')
    var enMenu = document.getElementById('menu')
    var newOrder = elegir.cloneNode(true)
    /*     enMenu.appendChild(newOrder) */
    enMenu.insertBefore(newOrder, agregarOrden)
    let servicioNuevo = new Servicio()
    console.log(servicioNuevo)
  }
 
  function cambio1 () {
    if (checkbox1.checked){
      checkbox1.checked = true
      checkbox2.checked = false
      checkbox3.checked = false
      checkbox4.checked = false
    }else{
      checkbox1.checked = false
    }
  }
  function cambio2(){
    if (checkbox2.checked){
      checkbox2.checked = true
      checkbox1.checked = false
    }
  }
  function cambio3(){
    if (checkbox3.checked){
      checkbox3.checked = true
      checkbox1.checked = false
    } 
  }
  function cambio4(){
    if (checkbox4.checked){
      checkbox4.checked = true
      checkbox1.checked = false
    } 
  }

  function convertirStringsANumeros(){
    this.o1 = parseInt(opcionUno.value)
    this.o2 = parseInt(opcionDos.value)
    this.o3 = parseInt(opcionTres.value)
  }
  
  function evaluar(ev){
    this.o1 = parseInt(opcionUno.value)
    this.o2 = parseInt(opcionDos.value)
    this.o3 = parseInt(opcionTres.value)
    this.ops = this.o1 + this.o2 + this.o3
      if(this.ops === 0){
        avisoTacos.style.display = 'flex'
        textoTacos.innerHTML = 'Debes pedir al menos un taco'
      }else{
        levantarPedido()
    }
    console.log(ev)
  }
   
function levantarPedido() {
  this.convertirStringsANumeros()
  if(checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked){
    ticket.style.display = 'block'
    pedido.innerHTML = 'Pediste:'
    if(this.o1 > 0){
      uno.innerHTML = `${this.o1} ${this.o1 < 2 ? 'taco':'tacos'} de ${menu[0].nombre}`
    }if(this.o2 > 0){
      dos.innerHTML = `${this.o2} ${this.o2 < 2 ? 'taco':'tacos'} de ${menu[1].nombre}`
    }if (this.o3 > 0){
      tres.innerHTML = `${this.o3} ${this.o3 < 2 ? 'taco':'tacos'} de ${menu[2].nombre}`
    }if(checkbox1.checked){
      conTodo.innerHTML = 'Con todo'
    }if(checkbox2.checked){
      sinArroz.innerHTML = 'Sin arroz'
    }if(checkbox3.checked){
      sinSalsa.innerHTML = 'Sin salsa'
    }if(checkbox4.checked){
      desarmados.innerHTML = 'Desarmados'
    }
    this.total()
  } else {
    avisoCheck.style.display = 'flex'
    textoCheck.innerHTML = 'Por favor indicanos como quieres tus tacos'
  }

}
function total(){
  this.o1 = this.o1 * menu[0].precio
  this.o2 = this.o2 * menu[1].precio
  this.o3 = this.o3 * menu[2].precio
  this.total = this.o1 + this.o2 + this.o3
  console.log(this.total)
  costo.innerHTML = 'Total:'
  precio.innerHTML = `$${this.total}.00`
}



/*     console.log( uno, dos, tres)
 */
function servicios(){
  window.servicio = new Servicio()
}
console.log(Servicio)


/*   const hero = document.getElementById('hero') */
  let menuDelDia = document.getElementById('menu-del-dia')
  /* const comanda = document.getElementById('comanda') */
  let pregunta = document.getElementById('pregunta')
/*   const conocenos = document.getElementById('conocenos') */
  let contact = document.getElementById('contacto')
/* hero.addEventListener('change', goHero())
comanda.addEventListener('change', goComanda()) */
/* conocenos.addEventListener('scroll', cambiarColor(conocenos))
contact.addEventListener('scroll', cambiarColor(contact)) */
function goHero(){
    menuDelDia.classList.add('yellow')
    pregunta.classList.remove('yellow')
/*     conocenos.classList.remove('yellow') */
    contact.classList.remove('yellow')
  }
  function goComanda(){
    pregunta.classList.add('yellow')
    menuDelDia.classList.remove('yellow')
/*     conocenos.classList.remove('yellow')*/
    contact.classList.remove('yellow')
  }
/*   function goConocenos(){
    conocenos.classList.add('yellow')
    menuDelDia.classList.remove('yellow')
    pregunta.classList.remove('yellow')
    contact.classList.remove('yellow')
  } */
  function goContact(){
    contact.classList.add('yellow')
    menuDelDia.classList.remove('yellow')
    pregunta.classList.remove('yellow')
/*     conocenos.classList.remove('yellow')
 */}
 var contenido = document.getElementById('contenido')
 var barMenu = document.getElementById('bar-menu')
 var hero = document.getElementById('hero')
 var comanda = document.getElementById('comanda')
 var contactMe = document.getElementById('contactMe')



 function resaltar(id){
   id.classList.add('yellow')
 }
 function quitarResaltar(id){
   id.classList.remove('yellow')
 }

 function changeBar(){
  if(contenido.scrollTop < hero.offsetHeight){
    resaltar(menuDelDia)
  }if(contenido.scrollTop > hero.clientHeight-300){
    quitarResaltar(menuDelDia)
    resaltar(pregunta)
  }if(contenido.scrollTop < comanda.clientHeight-400){
    quitarResaltar(pregunta)
  }
}
 

guisado1.innerHTML = menu[0].nombre
guisado2.innerHTML = menu[1].nombre
guisado3.innerHTML = menu[2].nombre
