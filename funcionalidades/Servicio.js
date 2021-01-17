/* import Comida from './Comida.js' */
import Orden from './Orden.js'

/* import hoyEnSagaz from './menu' */

class Servicio{


  constructor(){
    
    this.ordenes = []
    this.newOrder()
    this.agregar = document.getElementById('agregarOrden')
    this.agregar.onclick = () => this.newOrder()
    this.eliminar
  }

/*   cuenta () {
    var saveCoins = 0
    const countCoins = (coins) => {
      saveCoins += coins
      console.log(`Hay ${saveCoins} activos.`)
    }
    return countCoins 
  }*/

  async newOrder (){
/*     let miCuenta = this.cuenta()
    miCuenta(1) */
    this.cuenta = this.ordenes.length
    let nuevaOrden = await new Orden(this.cuenta)
    this.ordenes.push(nuevaOrden)
    console.log(this.ordenes)
    console.log(this.cuenta)
    /*     console.log(ordenes) */
  }
}

Servicio.prototype.splice = function(){
  this.ordenes.splice()
}
Servicio.prototype.eliminar = function(cuenta){
/*   debugger */
  let elimina = cuenta - 1
  console.log(this.ordenes)
  this.ordenes.splice(elimina, 1)
/*     let cuenta = this.cuenta */
  this.ordenes.forEach(function(o){
    if(o.cuenta > cuenta){
      o.cuenta -= 1
      o.elegir.id = `elegir${o.cuenta}`
    }
  })
  console.log(this.ordenes)
}
/*     Servicio.prototype.push = function (){
      this.ordenes.push()
    } */


export default Servicio