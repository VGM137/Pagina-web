import Comida from './Comida.js'
import Orden from './Orden.js'

class Servicio{
  constructor(config){
  this.array = config.el
  this.menu = []
  this.chicharron = new Comida('Chicharrón', 15, 50)
  this.suadero = new Comida('Suadero', 15, 50)
  this.rajas = new Comida('Rajas', 15, 50)
  this.menu.push(this.chicharron, this.suadero, this.rajas)
  this.newOrder()
  this.arrayDeSubtotales = []
  }

  newOrder (){
    let nuevaOrden = new Orden({ el: this.menu, el2: this.arrayDeSubtotales })
    this.array.push(nuevaOrden)
    console.log(this.array)
    this.array.forEach(function(orden){
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

  
}
    Servicio.prototype.push = function (){
      this.array.push()
    }

export default Servicio