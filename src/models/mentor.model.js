/*
*/

//requiriendo mongoose:
const mongoose = require("mongoose")


//Creando un nuevo esquema de mongoose para el koder
const mentorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength:20,
    },
    lenguaje:{
        type:String
    },
    edad:{
        type: Number,
        min: 18,
        max:150
    },
    generacion:{
        type:String,
        required:true
    },
    sexo:{
        type: String,
        enum: ["f", "m", "o"]
    }
})

//Asignando el esquema a una constante
const Mentor = mongoose.model("mentor", mentorSchema)

//Exportando modelo:
module.exports = Mentor

//tambien se puede hacer asi para ahorrar lineas de memora:

//module.exports = mongoose.model("mentor", mentorSchema)