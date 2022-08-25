
const Generation =require("../models/generation.model")

const create = (data)=>{
    //Crear un coder
    const generation = Generation.create(data)
    return generation
    //Tambien se puede ahorrar lineas retornando en la misma declaracion:
    //return mentor.create(data)
}

module.exports = {create}