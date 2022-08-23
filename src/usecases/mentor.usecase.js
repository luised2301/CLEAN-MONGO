//importamos el modelo de mentor

const Mentor =require("../models/mentor.model")

//Usos de caso son funciones tambien conocidas como Handlers


//Nota: los usos de caso no tienen acceso al body , ni al request

//1.-Uso de caso para crear usuario
//Se recibe la data del coder
const create = (data)=>{
    //Crear un coder
    const mentor = Mentor.create(data)
    return mentor
    //Tambien se puede ahorrar lineas retornando en la misma declaracion:
    //return mentor.create(data)
}

const consult =(data)=>{
    const mentor = Mentor.findById(data)
    return mentor 
}
const update =(id, data)=>{
    const mentor = Mentor.findByIdAndUpdate(id, data, { returnDocument: "after" })
    return mentor 
}

const remove = (data)=>{
    const mentor = Mentor.findByIdAndRemove(data)
    return mentor 
}

//Get mentor
//Actualizar mentor
//Eliminar mentor

module.exports = {create, consult, update,remove}