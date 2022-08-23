const { application } = require("express")
const express = require("express")
const server = express()
const routerKoder = require("./routes/koder.route")
//middlewares
server.use(express.json())
//middlewares de ruta
server.use("/koders", routerKoder)
// Endpoint de Home

//Exportar
//Solo exporta 1 cosa (puede ser un arreglo, objeto, aplicacion de express)
module.exports = server

