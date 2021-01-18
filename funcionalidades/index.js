import Servicio from './Servicio.js'
import Validaciones from './validacion.js'
import navegacion from './navegacion.js'

let servicio = new Servicio()

let agregarOrden = document.getElementById('agregarOrden')
agregarOrden.addEventListener('click', Servicio.prototype.newOrder)

let ordenar = document.getElementById('ordenar')
ordenar.onclick = () => new Validaciones

let contenido = document.getElementById('contenido')
contenido.onscroll = () => new navegacion(contenido)