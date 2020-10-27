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

let menu = []
  let comidas = menu.push(chicharron, suadero, rajas)

let arrayDeServicios = []
  class Servicio{
    constructor(){
      this.inicializar()
    }

  inicializar(){
    /* this.insertarMenu() */
    this.insertarFormulario()
/*     arrayDeServicios.push(this.elegir)

    this.agregarOrden = document.getElementById('agregarOrden')
    this.box = document.getElementById('box')
    this.check = document.getElementById('check')*/
    this.agregarOrden = document.getElementById('agregarOrden')
    this.agregarOrden.addEventListener('click', this.insertarFormulario)
/*     console.log(this.arrayDeOrdenes)
    this.clearForm */
  }

  insertarFormulario(){
    this.agregarOrden = document.getElementById('agregarOrden')
    this.menu = document.getElementById('menu')

    this.elegir = document.createElement('fieldset')
    this.elegir.id = 'elegir'
    this.elegir.classList.add('elegir')
    this.menu.insertBefore(this.elegir, this.agregarOrden)

      this.avisoTacos = document.createElement('div')
      this.avisoTacos.id = 'avisoTacos'
      this.avisoTacos.classList.add('avisoTacos')
      this.elegir.appendChild(this.avisoTacos)
        this.textoTacos = document.createElement('p')
        this.textoTacos.id = 'textoTacos'
        this.textoTacos.classList.add('textoTacos')
        this.avisoTacos.appendChild(this.textoTacos)

      this.platillos = document.createElement('section')
      this.platillos.id = 'platillos'
      this.platillos.classList.add('platillos')
      this.elegir.appendChild(this.platillos)

        this.box = document.createElement('form')
        this.box.id = 'box'
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion1 = document.createElement('label')
          this.opcion1.id = 'opcion1'
          this.opcion1.classList.add('opcion')
          this.box.appendChild(this.opcion1)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = 'opcion1Input'
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)

        this.box = document.createElement('form')
        this.box.id = 'box'
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion2 = document.createElement('label')
          this.opcion2.id = 'opcion2'
          this.opcion2.classList.add('opcion')
          this.box.appendChild(this.opcion2)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = 'opcion2Input'
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)

        this.box = document.createElement('form')
        this.box.id = 'box'
        this.box.classList.add('box')
        this.platillos.appendChild(this.box)
          this.opcion3 = document.createElement('label')
          this.opcion3.id = 'opcion3'
          this.opcion3.classList.add('opcion')
          this.box.appendChild(this.opcion3)
          this.opcionInput = document.createElement('input')
          this.opcionInput.id = 'opcion3Input'
          this.opcionInput.classList.add('opcionInput')
          this.opcionInput.type = 'number'
          this.opcionInput.min = '0'
          this.opcionInput.value = '0'
          this.box.appendChild(this.opcionInput)

      this.avisoCheck = document.createElement('div')
      this.avisoCheck.id = 'avisoCheck'
      this.avisoCheck.classList.add('avisoCheck')
      this.elegir.appendChild(this.avisoCheck)
        this.textoCheck = document.createElement('p')
        this.textoCheck.id = 'textoTacos'
        this.textoCheck.classList.add('textoTacos')
        this.avisoCheck.appendChild(this.textoCheck)

      this.detalles = document.createElement('section')
      this.detalles.id = 'detalles'
      this.detalles.classList.add('detalles')
      this.elegir.appendChild(this.detalles)

        this.check1 = document.createElement('form')
        this.check1.id = 'check'
        this.check1.classList.add('check')
        this.detalles.appendChild(this.check1)
          this.option = document.createElement('label')
          this.option.id = 'option'
          this.option.classList.add('option')
          this.option.innerHTML = 'Con todo'
          this.check1.appendChild(this.option)
          this.opcionBox1 = document.createElement('input')
          this.opcionBox1.id = 'verificar1'
          this.opcionBox1.classList.add('opcionBox')
          this.opcionBox1.type = 'checkbox'
          this.check1.appendChild(this.opcionBox1)

        this.check2 = document.createElement('form')
        this.check2.id = 'check'
        this.check2.classList.add('check')
        this.detalles.appendChild(this.check2)
          this.option = document.createElement('label')
          this.option.id = 'option'
          this.option.classList.add('option')
          this.option.innerHTML = 'Sin arroz'
          this.check2.appendChild(this.option)
          this.opcionBox2 = document.createElement('input')
          this.opcionBox2.id = 'verificar2'
          this.opcionBox2.classList.add('opcionBox')
          this.opcionBox2.type = 'checkbox'
          this.check2.appendChild(this.opcionBox2)

        this.check3 = document.createElement('form')
        this.check3.id = 'check'
        this.check3.classList.add('check')
        this.detalles.appendChild(this.check3)
          this.option = document.createElement('label')
          this.option.id = 'option'
          this.option.classList.add('option')
          this.option.innerHTML = 'Sin salsa'
          this.check3.appendChild(this.option)
          this.opcionBox3 = document.createElement('input')
          this.opcionBox3.id = 'verificar3'
          this.opcionBox3.classList.add('opcionBox')
          this.opcionBox3.type = 'checkbox'
          this.check3.appendChild(this.opcionBox3)

        this.check4 = document.createElement('form')
        this.check4.id = 'check'
        this.check4.classList.add('check')
        this.detalles.appendChild(this.check4)
          this.option = document.createElement('label')
          this.option.id = 'option'
          this.option.classList.add('option')
          this.option.innerHTML = 'Desarmados'
          this.check4.appendChild(this.option)
          this.opcionBox4 = document.createElement('input')
          this.opcionBox4.id = 'verificar4'
          this.opcionBox4.classList.add('opcionBox')
          this.opcionBox4.type = 'checkbox'
          this.check4.appendChild(this.opcionBox4)

/*           this.guisado1 = document.getElementById('opcion1')
          this.guisado2 = document.getElementById('opcion2')
          this.guisado3 = document.getElementById('opcion3') */
          this.opcion1.innerHTML = menu[0].nombre
          this.opcion2.innerHTML = menu[1].nombre
          this.opcion3.innerHTML = menu[2].nombre


/*     this.checkbox1 = document.getElementById('verificar1')
    this.checkbox2 = document.getElementById('verificar2')
    this.checkbox3 = document.getElementById('verificar3')
    this.checkbox4 = document.getElementById('verificar4') */
    this.cambio1()
    this.cambio2()
    this.cambio3()
    this.cambio4()
  }

/*   insertarMenu(){

  } */
  cambio1(ev){
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
    console.log(ev)
  }

  cambio2(ev){
    this.checkbox1 = document.getElementById('verificar1')
    this.checkbox2 = document.getElementById('verificar2')
    if (this.checkbox2.checked){
      this.checkbox2.checked = true
      this.checkbox1.checked = false
    }
    console.log(ev)
  }
  cambio3(ev){
    this.checkbox1 = document.getElementById('verificar1')
    this.checkbox3 = document.getElementById('verificar3')
    if (this.checkbox3.checked){
      this.checkbox3.checked = true
      this.checkbox1.checked = false
    }
    console.log(ev)
  }
  cambio4(ev){
    this.checkbox1 = document.getElementById('verificar1')
    this.checkbox4 = document.getElementById('verificar4')
    if (this.checkbox4.checked){
      this.checkbox4.checked = true
      this.checkbox1.checked = false
    }
    console.log(ev)
  }
}
  function servicios(){
    window.servicio = new Servicio()
    console.log(Servicio)
  }

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
