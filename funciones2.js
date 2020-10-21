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

  checkbox1 = document.getElementById('verificar1')
  checkbox2 = document.getElementById('verificar2')
  checkbox3 = document.getElementById('verificar3')
  checkbox4 = document.getElementById('verificar4')
  checkbox1.addEventListener('change', cambio1)
  checkbox2.addEventListener('change', cambio2)
  checkbox3.addEventListener('change', cambio3)
  checkbox4.addEventListener('change', cambio4)

  let menuDelDia = document.getElementById('menu-del-dia')
  let pregunta = document.getElementById('pregunta')
  let contact = document.getElementById('contacto')

  function resaltar(id){
    id.classList.add('yellow')
  }
  function quitarResaltar(id){
    id.classList.remove('yellow')
  }

  class Servicio{
    constructor(){
      inicializar()
    }
  }

  function inicializar(){
    this.elegir = document.getElementById('elegir')
    this.elegir.style.display = "block"

    insetarMenu()
  }
  function insetarMenu(){
    this.guisado1 = document.getElementById('opcion1')
    this.guisado2 = document.getElementById('opcion2')
    this.guisado3 = document.getElementById('opcion3')
    this.guisado1.innerHTML = menu[0].nombre
    this.guisado2.innerHTML = menu[1].nombre
    this.guisado3.innerHTML = menu[2].nombre
  }
  function cambio1(){
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
  function servicios(){
    window.servicio = new Servicio()
  }
  console.log(Servicio)


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
