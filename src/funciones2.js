function Comida(nombre, precio, cantidad) {
  this.nombre = nombre
  this.precio = precio
  this.cantidad = cantidad
}

let chicharron = new Comida('Chicharrón', 15, 50)
let suadero = new Comida('Suadero', 15, 50)
let rajas = new Comida('Rajas', 15, 50)
let huevosJamon = new Comida('Huevos con jamón', 15, 50)
let albondigas = new Comida('Albondigas', 15, 50)
let huevosCocidos = new Comida('Huevos cocidos', 15, 50)

  let menu = []
  let comidas = menu.push(suadero, huevosJamon, albondigas, huevosCocidos)

  let pedido = document.getElementById('pedido')
  let costo = document.getElementById('costo')

  let ordenes = []

  let agregarOrden = document.getElementById('agregarOrden')
  agregarOrden.addEventListener('click', newOrder)

  let ordenar = document.getElementById('ordenar')
  ordenar.addEventListener('click', validar)
  
  let nombre = document.getElementById('nombre')
  let direccion = document.getElementById('direccion')
  let telefono = document.getElementById('telefono')

  const cuentaDeOrdenes = () => {
    var guardarOrden = 0
    const contarOrden = (orden) => {
      guardarOrden += orden
      console.log(`${guardarOrden}`)
    }
    return contarOrden
  }
  
  let miCuentaDeOrdenes = cuentaDeOrdenes()
  
  class Servicio{
    constructor(){
    newOrder()
    }
  }
  class Orden{
    constructor(){
      this.cuenta = ordenes.length + 1
      console.log(this.cuenta)
      this.agregarOrden = document.getElementById('agregarOrden')
      this.menu = document.getElementById('menu')
      this.elegir = document.createElement('fieldset')
      this.elegir.id = `elegir${this.cuenta}`
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
          if(this.cuenta > 1){
            this.delete = document.createElement('button')
            this.delete.id = 'delete-order'
            this.delete.classList.add('delete-order')
            this.delete.innerText = 'x'
            this.elegir.appendChild(this.delete)
            this.delete.onclick = () => {
              this.menu.removeChild(this.elegir)
              this.eliminar()
            }
          }
          this.aumentarDisminuir()
          this.checks()
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
          this.up = document.createElement('button')
          this.up.id = `up`
          this.up.classList.add('up')
          this.up.type = 'button' 
          this.up.innerText = '+' 
          this.box.appendChild(this.up)
          this.down = document.createElement('button')
          this.down.id = `down`
          this.down.classList.add('down')
          this.down.type = 'button' 
          this.down.innerText = '-' 
          this.box.appendChild(this.down)
      
          this.opcion.innerHTML = opciones.nombre          
        }
    }
    aumentarDisminuir(){
      let elect = this.elegir.childNodes[1]
      for(let i = 0; i < menu.length; i++){
        let comida = elect.childNodes[i]
        let suma = comida.up
        suma.onclick = () => comida.opcionInput.value++
        let resta = comida.down
        resta.onclick = () => comida.opcionInput.value -= 1 ? comida.opcionInput.value > 0  : false
      }
    }
    checks(){
      this.opcionBox1.onclick = () => {
        if (this.opcionBox1.checked){
            this.opcionBox1.checked = true
            this.opcionBox2.checked = false
            this.opcionBox3.checked = false
            this.opcionBox4.checked = false
          }else{
            this.opcionBox1.checked = false
          }
        }
        this.opcionBox2.onclick = () => {
          if (this.opcionBox2.checked){
            this.opcionBox2.checked = true
            this.opcionBox1.checked = false
          }
        }
        this.opcionBox3.onclick = () => {
         if (this.opcionBox3.checked){
          this.opcionBox3.checked = true
          this.opcionBox1.checked = false
          }
        }
        this.opcionBox4.onclick = () => {
          if (this.opcionBox4.checked){
            this.opcionBox4.checked = true
            this.opcionBox1.checked = false
          }
        }
    }
    eliminar(){
      this.elimina = this.cuenta - 1
      this.borrar = ordenes.splice(this.elimina, 1)
      let cuenta = this.cuenta
      ordenes.forEach(function(o){
        if(o.cuenta > cuenta){
          o.cuenta -= 1
          o.elegir.id = `elegir${o.cuenta}`
        }
      })
      console.log(ordenes)
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
      cantidades.forEach(function(cantidad){suma += cantidad;});
      console.log(suma)
      if(suma < 1){
        this.avisoTacos.style.display = 'flex'
        this.textoTacos.innerHTML = 'Debes pedir al menos un taco.'
      } else {
        if(this.avisoTacos){
          this.avisoTacos.style.display = 'none'
        }
      }
      this.verificarCheck()
    }
    verificarCheck(){
      if(this.opcionBox1.checked || this.opcionBox2.checked || this.opcionBox3.checked || this.opcionBox4.checked){
        if(this.avisoCheck){
          this.avisoCheck.style.display = 'none'
        }
        this.formulario = document.createElement('h2')
        this.formulario.id = 'formulario'
        this.formulario.classList.add('formulario')
        this.formulario.innerHTML = `Orden ${this.cuenta}:`
        pedido.appendChild(this.formulario)
        for(let i = 0; i <= this.cantidades.length; i++){
          this.numero = this.cantidades[i]
          this.tacos = menu[i]
          if(this.numero > 0){
              this.ordenDePedido = document.createElement('p')
              this.ordenDePedido.classList.add( 'orden-de-pedido')
              this.formulario.appendChild(this.ordenDePedido)
              this.ordenDePedido.innerHTML = `${this.numero} ${this.numero < 2 ? 'taco':'tacos'} de ${this.tacos.nombre}`
              this.subtotal = this.numero * this.tacos.precio
              arrayDeSubtotales.push(this.subtotal) 
          }
        }
        if(this.opcionBox1.checked){
          this.detail = document.createElement('p') 
          this.detail.id = 'detail'
          this.detail.classList.add('detail')
          this.detail.innerHTML = 'Con todo'
          this.formulario.appendChild(this.detail)
        }if(this.opcionBox2.checked){
          this.detail = document.createElement('p') 
          this.detail.id = 'detail'
          this.detail.classList.add('detail')
          this.detail.innerHTML = 'Sin arroz'
          this.formulario.appendChild(this.detail)
        }if(this.opcionBox3.checked){
          this.detail = document.createElement('p') 
          this.detail.id = 'detail'
          this.detail.classList.add('detail')
          this.detail.innerHTML = 'Sin salsa'
          this.formulario.appendChild(this.detail)
        }if(this.opcionBox4.checked){
          this.detail = document.createElement('p') 
          this.detail.id = 'detail'
          this.detail.classList.add('detail')
          this.detail.innerHTML = 'Desarmados'
          this.formulario.appendChild(this.detail)
        }
        formularios.push(this.formulario)
        listo.push('Orden')
      } else {
        this.avisoCheck.style.display = 'flex'
        this.textoCheck.innerHTML = '¿Cómo quieres tus tacos?'
        this.eliminarCantidades = this.cantidades.splice(0, this.cantidades.length)
      }
    }
  }

  function newOrder (){
      miCuentaDeOrdenes(1)
      let nuevaOrden = new Orden()
      ordenes.push(nuevaOrden)
      console.log(ordenes)
  }

  function validar(){
    for(let i = 0; i < ordenes.length; i++){
      ordenes[i].evaluar()
    }
    informacion()
  }

  function informacion(){
    let aviso1 = document.getElementById('aviso-nombre')
    let aviso2 = document.getElementById('aviso-direccion')
    let aviso3 = document.getElementById('aviso-numero')
    if(!nombre.value.length == 0){
      if(aviso1){
        aviso1.style.display = 'none'
      }
      info.push(nombre.value)
    }else{
      aviso1.style.display = 'block'
      info.splice(0, info.length)
    }
    if(!direccion.value.length == 0){
      if(aviso2){
        aviso2.style.display = 'none'
      }
      info.push(direccion.value)
    } else {
      aviso2.style.display = 'block'
      info.splice(0, info.length)
    }
    if(telefono.value.length == 10){
      if(aviso3){
        aviso3.style.display = 'none'
      }
      info.push(telefono.value)
      console.log(info)
    } else {
      aviso3.style.display = 'block'
      info.splice(0, info.length)
    }
      order()
  }

  function order(){
    if(listo.length === ordenes.length & info.length == 3){
      agregarOrden.removeEventListener('click', newOrder)
      /* infoCliente.style.display = 'flex'
      siguiente.removeEventListener('click', validar)
      ordenar.style.display = 'flex'*/
      ordenar.removeEventListener('click', validar) 
      desplegarTicket()
    }else{
      var eliminarPlatos = arrayDePlatos.splice(0, arrayDePlatos.length)
      var eliminarValores = arrayDeValores.splice(0, arrayDeValores.length)
      var eliminarSubtotales = arrayDeSubtotales.splice(0, arrayDeSubtotales.length)
      var eliminarListo = listo.splice(0, listo.length)
      var eliminarInfo = info.splice(0, info.length)
      let formulario = document.getElementById('formulario')
      if(formulario){
        formularios.forEach(function(form){
          pedido.removeChild(form)
        })}
      var eliminarForm = formularios.splice(0, formularios.length)
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
  let arrayDeSubtotales = []
  let listo = []
  let info = []
  let formularios = []
  
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

  function changeBar(ev){
     if(contenido.scrollTop < hero.offsetHeight){
       resaltar(menuDelDia)
     }if(contenido.scrollTop >= hero.clientHeight){
       quitarResaltar(menuDelDia)
       resaltar(pregunta)
     } else {
       quitarResaltar(pregunta)
     }if(contenido.scrollTop >= hero.scrollHeight + comanda.scrollHeight*.70){
       quitarResaltar(pregunta)
       resaltar(contact)
     } else { 
       quitarResaltar(contact)
     }
     console.log()
  }