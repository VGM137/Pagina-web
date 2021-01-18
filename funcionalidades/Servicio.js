import Orden from './Orden.js'
import { arrayDeOrdenes } from './arreglos.js'

class Servicio{
  constructor(){
    this.newOrder()
    this.eliminar = this.eliminar.bind(this)
    this.eliminar
  }
  newOrder (){
    this.cuenta = arrayDeOrdenes.length
    let nuevaOrden = new Orden(this.cuenta)
    arrayDeOrdenes.push(nuevaOrden)
    console.log(arrayDeOrdenes)
  }
  eliminar(numeroDeOrden){
    this.elimina = numeroDeOrden - 1
    arrayDeOrdenes.splice(this.elimina, 1)
    arrayDeOrdenes.forEach(function(o){
      if(o.numeroDeOrden > numeroDeOrden){
        o.numeroDeOrden -= 1
        o.elegir.id = `elegir${o.numeroDeOrden}`
      }
    })
    console.log(arrayDeOrdenes)
  }
}

export default Servicio