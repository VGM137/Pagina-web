


/* const comida = (nombre, presentacion, picoso, cantidad, precio) => {
  this.nombre = nombre
  this.presentacion = presentacion
  this.picoso = picoso
  this.cantidad = cantidad
  this.precio = precio
} */
let chicharron = {
  nombre:'Chicharrón',
  presentacion: 'Taco',
  picoso: 0,
  cantidad: 50,
  precio: 15.00
}
let suadero = {
  nombre:'Suadero',
  presentacion: 'Taco',
  picoso: 0,
  cantidad: 50,
  precio: 15.00
}
let rajas = {
  nombre:'rajas',
  presentacion: 'Taco',
  picoso: 0,
  cantidad: 50,
  precio: 15.00
}
/* let suadero = new comida('Suadero', 'Taco', 0, 50, 15.00)
let rajas = new comida('Rajas', 'Taco', 4, 50, 15.00) */
  let menu = []
    let comidas = menu.push(chicharron, suadero, rajas)
/* var nombreMenu = menu.map(function(menu){return ' ' + menu.nombre})
var preciosMenu = menu.map(function(menu){return menu.precio})
 */



/*   let formulario = document.getElementById('elegir')
  console.log(formulario) */


/*let cambios = [cambio1, cambio2, cambio3, cambio4]
let checkboxes = [checkbox1, checkbox2, checkbox3, checkbox4]
/*   var checkboxesChecked = checkboxes.map(function(checkboxes){return checkboxes.checked}) */



class Servicio{
  constructor(){
    this.inicializar()
  }

/* class NuevoServicio extends Servicio{

} */
  inicializar(){
    this.menu
    this.cambio1
    this.cambio2
    this.cambio3
    this.cambio4
    this.levantarPedido = this.levantarPedido.bind(this)

    this.convertirStringsANumeros

    this.checkbox1 = document.getElementById('verificar1')
    this.checkbox2 = document.getElementById('verificar2')
    this.checkbox3 = document.getElementById('verificar3')
    this.checkbox4 = document.getElementById('verificar4')
    this.checkbox1.addEventListener('change', this.cambio1)
    this.checkbox2.addEventListener('change', this.cambio2)
    this.checkbox3.addEventListener('change', this.cambio3)
    this.checkbox4.addEventListener('change', this.cambio4)
    this.tuOrden = document.getElementById('tuOrden')


    this.guisado1 = document.getElementById('opcion1')
    this.guisado2 = document.getElementById('opcion2')
    this.guisado3 = document.getElementById('opcion3')
    this.guisado1.innerHTML = menu[0].nombre
    this.guisado2.innerHTML = menu[1].nombre
    this.guisado3.innerHTML = menu[2].nombre

    this.agregarOrden = document.getElementById('agregarOrden')
    this.agregarOrden.addEventListener('click', this.nuevaOrden)
    this.ordenar = document.getElementById("ordenar");
    this.ordenar.addEventListener("click", this.evaluar);
  }
    nuevaOrden(){
    let elegir = document.getElementById('elegir')
    let enMenu = document.getElementById('menu')
    let newOrder = elegir.cloneNode(true)
    /*     enMenu.appendChild(newOrder) */
    enMenu.insertBefore(newOrder, this.agregarOrden)
    let otroServicio = new Servicio
    console.log(otroServicio)
  }

    cambio1 () {
      this.checkbox1 = document.getElementById('verificar1')
      this.checkbox2 = document.getElementById('verificar2')
      this.checkbox3 = document.getElementById('verificar3')
      this.checkbox4 = document.getElementById('verificar4')
    if (this.checkbox1.checked){
      this.checkbox1.checked = true
      this.checkbox2.checked = false
      this.checkbox3.checked = false
      this.checkbox4.checked = false
    }else{
      this.checkbox1.checked = false
    }
  }
    cambio2(){
      this.checkbox1 = document.getElementById('verificar1')
      this.checkbox2 = document.getElementById('verificar2')
    if (this.checkbox2.checked){
      this.checkbox2.checked = true
      this.checkbox1.checked = false
    }
  }
    cambio3(){
      this.checkbox1 = document.getElementById('verificar1')
      this.checkbox3 = document.getElementById('verificar3')
    if (this.checkbox3.checked){
      this.checkbox3.checked = true
      this.checkbox1.checked = false
    }
  }
    cambio4(){
      this.checkbox1 = document.getElementById('verificar1')
      this.checkbox4 = document.getElementById('verificar4')
    if (this.checkbox4.checked){
      this.checkbox4.checked = true
      this.checkbox1.checked = false
    }
  }

    convertirStringsANumeros(){
      this.opcionUno = document.getElementById('opcion1Input')
      this.opcionDos = document.getElementById('opcion2Input')
      this.opcionTres = document.getElementById('opcion3Input')
      this.avisoTacos = document.getElementById('avisoTacos')
    this.o1 = parseInt(this.opcionUno.value)
    this.o2 = parseInt(this.opcionDos.value)
    this.o3 = parseInt(this.opcionTres.value)
  }

    evaluar(){
      this.opcionInput = document.getElementsByClassName('opcionInput')
      this.opcionUno = document.getElementById('opcion1Input')
      this.opcionDos = document.getElementById('opcion2Input')
      this.opcionTres = document.getElementById('opcion3Input')
      this.avisoTacos = document.getElementById('avisoTacos')
    this.o1 = parseInt(this.opcionUno.value)
    this.o2 = parseInt(this.opcionDos.value)
    this.o3 = parseInt(this.opcionTres.value)
    this.ops = this.o1 + this.o2 + this.o3
      if(this.ops === 0){
        this.avisoTacos.style.display = 'flex'
        textoTacos.innerHTML = 'Debes pedir al menos un taco'
      }if(this.ops > 0){
        this.levantarPedido()
    }
  }

  levantarPedido(){
  this.ticket = document.getElementById('ticket')
  this.avisoCheck = document.getElementById('avisoCheck')
  this.convertirStringsANumeros()
  if(this.checkbox1.checked || this.checkbox2.checked || this.checkbox3.checked || this.checkbox4.checked){
    this.ticket.style.display = 'block'
    pedido.innerHTML = 'Pediste:'
    this.total()
    if(this.o1 > 0){
      uno.innerHTML = `${this.o1} ${this.o1 < 2 ? 'taco':'tacos'} de ${menu[0].nombre}`
    }if(this.o2 > 0){
      dos.innerHTML = `${this.o2} ${this.o2 < 2 ? 'taco':'tacos'} de ${menu[1].nombre}`
    }if (this.o3 > 0){
      tres.innerHTML = `${this.o3} ${this.o3 < 2 ? 'taco':'tacos'} de ${menu[2].nombre}`
    }if(this.checkbox1.checked){
      conTodo.innerHTML = 'Con todo'
    }if(this.checkbox2.checked){
      sinArroz.innerHTML = 'Sin arroz'
    }if(this.checkbox3.checked){
      sinSalsa.innerHTML = 'Sin salsa'
    }if(this.checkbox4.checked){
      desarmados.innerHTML = 'Desarmados'
  } else {
    this.avisoCheck.style.display = 'flex'
    textoCheck.innerHTML = 'Por favor indicanos como quieres tus tacos'
  }
}
}
  total(){
  this.o1 = this.o1 * menu[0].precio
  this.o2 = this.o2 * menu[1].precio
  this.o3 = this.o3 * menu[2].precio
  this.total = this.o1 + this.o2 + this.o3
  console.log(this.total)
  costo.innerHTML = 'Total:'
  precio.innerHTML = `$${this.total}.00`
}
}


/*     console.log( uno, dos, tres)
 */
function servicios(){
  window.servicio = new Servicio()
}
console.log(Servicio)

  let menuDelDia = document.getElementById('menu-del-dia')
  let pregunta = document.getElementById('pregunta')
  let contact = document.getElementById('contacto')

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

 function changeBar(ev){
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
  console.log(ev)
}
