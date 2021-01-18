class navegacion{
  constructor(contenido){
    this.contenido = contenido
    this.menuDelDia = document.getElementById('menu-del-dia')
    this.pregunta = document.getElementById('pregunta')
    this.contact = document.getElementById('contacto')
    this.barMenu = document.getElementById('bar-menu')
    this.hero = document.getElementById('hero')
    this.comanda = document.getElementById('comanda')
    this.contactMe = document.getElementById('contactMe')
    this.changeBar()
    this.resaltar
    this.quitarResaltar
  }
  resaltar(id){
    id.classList.add('yellow')
  }
  quitarResaltar(id){
    id.classList.remove('yellow')
  }
  changeBar(){
    if(this.contenido.scrollTop < this.hero.offsetHeight*.5){
      this.resaltar(this.menuDelDia)
      this.quitarResaltar(this.pregunta)
    }else{
      this.quitarResaltar(this.menuDelDia)
    }

    if(this.contenido.scrollTop > this.hero.clientHeight*.5 ){
      this.resaltar(this.pregunta)
    }

    if(this.contenido.scrollTop > this.contenido.scrollHeight-this.contenido.clientHeight*1.2){
      this.resaltar(this.contact)
      this.quitarResaltar(this.pregunta)
    }
    else{
      this.quitarResaltar(this.contact)
    }
  }
}
export default navegacion