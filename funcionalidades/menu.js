import Comida from './Comida.js'

const hoyEnSagaz = []

let chicharron = new Comida('Chicharrón', 15, 50)
let suadero = new Comida('Suadero', 15, 50)
let rajas = new Comida('Rajas', 15, 50)
let huevosJamon = new Comida('Huevos con jamón', 15, 50)
let albondigas = new Comida('Albóndigas', 15, 50)
let huevosCocidos = new Comida('Huevos cocidos', 15, 50)

hoyEnSagaz.push(chicharron, rajas, albondigas, huevosCocidos)

export default hoyEnSagaz