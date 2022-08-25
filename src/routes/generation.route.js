const express = require("express")

const {create}= require("../usecases/generation.usecase")
//Haciendo un router
const router = express.Router()
// Endpoint de crear
router.post("/", async (request, response)=>{
    //Recibir el request
    try{
        const {body}=request
        console.log(request)
    //Ejecutar la funcion create del usercase
    const generation = await create(body)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{generation}
         })
    }
    catch(error){
        response.status(400)
    response.json({sucess:false,
        message:error
         })
    }
})

module.exports = router