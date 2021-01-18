import { arrayDeSubtotales } from './arreglos.js'

class Ticket{
  constructor(){
    this.desplegarTicket()
    this.promo()
  }
  desplegarTicket(){
    let total = 0
    arrayDeSubtotales.forEach(function(a){total += a;});
    let price = document.createElement('h2')
    price.classList.add('price')
    costo.appendChild(price)
    price.innerHTML = `$${total}.00`
    ticket.style.display = 'block'
  }
}

export default Ticket
