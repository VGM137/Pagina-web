function Comida(nombre, precio, cantidad) {
  this.nombre = nombre
  this.precio = precio
  this.cantidad = cantidad
}

let chicharron = new Comida('Chicharrón', 15, 50)
let suadero = new Comida('Suadero', 15, 50)
let rajas = new Comida('Rajas', 15, 50)

  let menu = []
  let comidas = menu.push(chicharron, suadero, rajas)

  let pedido = document.getElementById('pedido')
  let costo = document.getElementById('costo')

  let ordenes = []
  class Servicio{
    constructor(){
    newOrder()
    this.agregarOrden = document.getElementById('agregarOrden')
    this.agregarOrden.onclick = newOrder
    }
  }
  class Orden{
    constructor(){
      this.agregarOrden = document.getElementById('agregarOrden')
      this.menu = document.getElementById('menu')
      this.elegir = document.createElement('fieldset')
      this.elegir.id = `elegir`
      this.elegir.classList.add(`elegir`)
      this.menu.insertBefore(this.elegir, this.agregarOrden)
        this.avisoTacos = document.createElement('div')
        this.avisoTacos.id = `avisoTacos`
        this.avisoTacos.classList.add('avisoTacos')
        this.elegir.appendChild(this.avisoTacos)
          this.textoTacos = document.createElement('p')
          this.textoTacos.id = `textoTacos`
          this.textoTacos.classList.add('textoTacos')
          this.avisoTacos.appendChild(this.textoTacos)
        this.platillos = document.createElement('section')
        this.platillos.id = `platillos`
        this.platillos.classList.add('platillos')
        this.elegir.appendChild(this.platillos)
        this.insertarOpciones()
        this.avisoCheck = document.createElement('div')
        this.avisoCheck.id = `avisoCheck`
        this.avisoCheck.classList.add('avisoCheck')
        this.elegir.appendChild(this.avisoCheck)
          this.textoCheck = document.createElement('p')
          this.textoCheck.id = `textoCheck`
          this.textoCheck.classList.add('textoCheck')
          this.avisoCheck.appendChild(this.textoCheck)
        this.detalles = document.createElement('section')
        this.detalles.id = `detalles`
        this.detalles.classList.add('detalles')
        this.elegir.appendChild(this.detalles)
          this.check1 = document.createElement('form')
          this.check1.id = `check`
          this.check1.classList.add('check')
          this.detalles.appendChild(this.check1)
            this.option = document.createElement('label')
            this.option.id = `option`
            this.option.classList.add('option')
            this.option.innerHTML = 'Con todo'
            this.check1.appendChild(this.option)
            this.opcionBox1 = document.createElement('input')
            this.opcionBox1.id = `verificar1 `
            this.opcionBox1.classList.add('opcionBox')
            this.opcionBox1.type = 'checkbox'
            this.check1.appendChild(this.opcionBox1)
          this.check2 = document.createElement('form')
          this.check2.id = `check`
          this.check2.classList.add('check')
          this.detalles.appendChild(this.check2)
            this.option = document.createElement('label')
            this.option.id = `option`
            this.option.classList.add('option')
            this.option.innerHTML = 'Sin arroz'
            this.check2.appendChild(this.option)
            this.opcionBox2 = document.createElement('input')
            this.opcionBox2.id = `verificar2 `
            this.opcionBox2.classList.add('opcionBox')
            this.opcionBox2.type = 'checkbox'
            this.check2.appendChild(this.opcionBox2)
          this.check3 = document.createElement('form')
          this.check3.id = `check`
          this.check3.classList.add('check')
          this.detalles.appendChild(this.check3)
            this.option = document.createElement('label')
            this.option.id = `option`
            this.option.classList.add('option')
            this.option.innerHTML = 'Sin salsa'
            this.check3.appendChild(this.option)
            this.opcionBox3 = document.createElement('input')
            this.opcionBox3.id = `verificar3 `
            this.opcionBox3.classList.add('opcionBox')
            this.opcionBox3.type = 'checkbox'
            this.check3.appendChild(this.opcionBox3)
          this.check4 = document.createElement('form')
          this.check4.id = `check`
          this.check4.classList.add('check')
          this.detalles.appendChild(this.check4)
            this.option = document.createElement('label')
            this.option.id = `option`
            this.option.classList.add('option')
            this.option.innerHTML = 'Desarmados'
            this.check4.appendChild(this.option)
            this.opcionBox4 = document.createElement('input')
            this.opcionBox4.id = `verificar4 `
            this.opcionBox4.classList.add('opcionBox')
            this.opcionBox4.type = 'checkbox'
            this.check4.appendChild(this.opcionBox4)
          this.evaluar
    }
    insertarOpciones(){
      for(let i = 0; i < menu.length; i++){
        let opciones = menu[i]
        this.box = document.createElement('form')
        this.box.id = `box`
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion = document.createElement('label')
          this.opcion.id = `opcion`
          this.opcion.classList.add('opcion')
          this.box.appendChild(this.opcion)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = `opcionInput`
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)
      
          this.opcion.innerHTML = opciones.nombre
        }
      }
    evaluar(){
      this.plato = this.platillos.childNodes
      this.valores(this.plato)
    }
    valores(plato){
      this.cantidades = []
      for(let n = 0; n < menu.length; n++){
        this.numeros = parseInt(plato[n].opcionInput.value)
        this.cantidades.push(this.numeros)
    }
    this.verificarCantidad(this.cantidades)
    console.log(this.cantidades)
    }
    verificarCantidad(cantidades){
      let suma = 0
      cantidades.forEach(function(a){suma += a;});
      console.log(suma)
      if(suma < 1){
        this.avisoTacos.style.display = 'flex'
        this.textoTacos.innerHTML = 'Debes pedir al menos un taco'
      }else{
        this.verificarCheck()
      }
    }
    verificarCheck(){
      if(this.opcionBox1.checked || this.opcionBox2.checked || this.opcionBox3.checked || this.opcionBox4.checked){
        for(let i = 0; i < this.cantidades.length; i++){
          this.numero = this.cantidades[i]
          this.tacos = menu[i]
          if(this.numero > 0){
              this.formulario = document.createElement('h2')
              this.formulario.classList.add('formulario')
              this.formulario.innerHTML = 'Orden:'
              pedido.appendChild(this.formulario)
              this.ordenDePedido = document.createElement('p')
              this.ordenDePedido.classList.add( 'orden-de-pedido')
              this.formulario.appendChild(this.ordenDePedido)
              this.ordenDePedido.innerHTML = `${this.numero} ${this.numero < 2 ? 'taco':'tacos'} de ${this.tacos.nombre}`
              this.subtotal = this.numero * this.tacos.precio
              arrayDeSubtotales.push(this.subtotal)
          }
        }
      }else{
        this.avisoCheck.style.display = 'flex'
        this.textoCheck.innerHTML = 'Por favor indicanos como quieres tus tacos'
      }
    }
  }

  function newOrder (){
      let nuevaOrden = new Orden()
      ordenes.push(nuevaOrden)
      console.log(ordenes)
      ordenes.forEach(function(orden){
        orden.opcionBox1.onclick = () => {
        if (orden.opcionBox1.checked){
            orden.opcionBox1.checked = true
            orden.opcionBox2.checked = false
            orden.opcionBox3.checked = false
            orden.opcionBox4.checked = false
          }else{
            orden.opcionBox1.checked = false
          }
        }
        orden.opcionBox2.onclick = () => {
          if (orden.opcionBox2.checked){
            orden.opcionBox2.checked = true
            orden.opcionBox1.checked = false
          }
        }
        orden.opcionBox3.onclick = () => {
         if (orden.opcionBox3.checked){
          orden.opcionBox3.checked = true
          orden.opcionBox1.checked = false
          }
        }
        orden.opcionBox4.onclick = () => {
          if (orden.opcionBox4.checked){
            orden.opcionBox4.checked = true
            orden.opcionBox1.checked = false
          }
        }
      })
  }

  let ordenar = document.getElementById('ordenar')
  ordenar.addEventListener('click', validar)

  function validar(){
    for(let i = 0; i < ordenes.length; i++){
      ordenes[i].evaluar()
    }
    console.log(arrayDeSubtotales)
    total()
  }
  function total(){
    let total = 0
    arrayDeSubtotales.forEach(function(a){total += a;});
    let price = document.createElement('h2')
    price.classList.add('price')
    costo.appendChild(price)
    price.innerHTML = `$${total}.00`
    ticket.style.display = 'block'
  }
  
  let arrayDePlatos = []
  let arrayDeValores = []
  let arrayDeSubtotales = []

  let menuDelDia = document.getElementById('menu-del-dia')
  let pregunta = document.getElementById('pregunta')
  let contact = document.getElementById('contacto')

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

  let contenido = document.getElementById('contenido')
  let barMenu = document.getElementById('bar-menu')
  let hero = document.getElementById('hero')
  let comanda = document.getElementById('comanda')
  let contactMe = document.getElementById('contactMe')

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
