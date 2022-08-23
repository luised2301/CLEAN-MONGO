/*
*/

//requiriendo mongoose:
const mongoose = require("mongoose")


//Creando un nuevo esquema de mongoose para el koder
const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength:20,
    },
    modulo:{
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
const Koder = mongoose.model("koders", koderSchema)

//Exportando modelo:
module.exports = Koder

//tambien se puede hacer asi para ahorrar lineas de memora:

//module.exports = mongoose.model("koders", koderSchema)