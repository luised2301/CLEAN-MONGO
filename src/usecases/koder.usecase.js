//importamos el modelo de koder

const Koder =require("../models/koder.model")

//Usos de caso son funciones tambien conocidas como Handlers


//Nota: los usos de caso no tienen acceso al body , ni al request

//1.-Uso de caso para crear usuario
//Se recibe la data del coder
const create = (data)=>{
    //Crear un coder
    const koder = Koder.create(data)
    return koder
    //Tambien se puede ahorrar lineas retornando en la misma declaracion:
    //return koder.create(data)
}

//Get koder
//Actualizar koder
//Eliminar koder

module.exports = {create,}