//Levantar servidor
//Conectar con bd
//Logica de ruteo
require('dotenv').config()
const app = require("./src/server")
const mongoose = require("mongoose")

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,    
}= process.env


const URL =`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`

mongoose.connect(URL)  
.then(()=>{
    console.log("conectado a la base de datos de mongo")
    app.listen(8080, ()=>{
        console.log("Server listening...")
    })

})
.catch((error)=>{
    console.log("error",error)
})