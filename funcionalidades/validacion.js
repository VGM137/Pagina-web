import { info, formularios, listo, arrayDeValores, arrayDeSubtotales, arrayDeOrdenes } from './arreglos.js'
import Servicio from './Servicio.js'
import Ticket from './Ticket.js'

class Validaciones{
  constructor(){
    this.validar()
  }
  validar(){
    for(let i = 0; i < arrayDeOrdenes.length; i++){
      arrayDeOrdenes[i].evaluar()
    }
    this.informacion()
  }
  informacion(){
  
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
      this.order()
  }
  order(){
    if(listo.length === arrayDeOrdenes.length & info.length == 3){
      agregarOrden.removeEventListener('click', Servicio.prototype.newOrder)
      /* infoCliente.style.display = 'flex'
      siguiente.removeEventListener('click', validar)
      ordenar.style.display = 'flex'*/
      ordenar.onclick = () => null
      new Ticket()
    }else{
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
}

export default Validaciones

