const express = require("express")
const server = express()
//middlewares
server.use(express.json())

// Endpoint de Home
server.get("/", (request, response)=>{
    response.json({message:"bienvenido a nuestra API de arquitectura limpia"})
})

//Exportar
//Solo exporta 1 cosa (puede ser un arreglo, objeto, aplicacion de express)
module.exports = server

