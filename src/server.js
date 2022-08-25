const express = require("express")
const app = express()

// Routes
const routerKoder = require("./routes/koder.route")
const routerMentor = require("./routes/mentor.route")
const routerGeneration = require("./routes/generation.route")
const routerUser = require("./routes/user.route")

// Middleware del json
app.use(express.json())

// Middlewares de rutas
app.use("/koders", routerKoder)
app.use("/mentors", routerMentor)
app.use("/generations", routerGeneration)
app.use("/users", routerUser)

// Endpoint de Home
app.get("/", (request, response) => {
  response.json({ message: "Bienvenido a nuestra API de arquitectura limpia" })
}) 


// solo exporta 1 cosa
// objeto -> 1 cosa
// arreglo -> 1 cosa
// aplicacion de express

/** Tarea
 * -> Collecion
 * - Modelos -> Usecases -> Endpoints -> server.js
 * -> 1. Crear Mentor
 * -> 2. Actualizar un mentor
 */
//
module.exports = app