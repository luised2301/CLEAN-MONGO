const express = require("express")

const {create}= require("../usecases/koder.usecase")
//Haciendo un router
const router = express.Router()
// Endpoint de crear
router.post("/", async (request, response)=>{
    //Recibir el request
    try{
        const {body}=request
    //Ejecutar la funcion create del usercase
    const koder = await create(body)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{koder}
         })
    
    }
    catch(error){
        response.status(400)
    response.json({sucess:false,
        message:error
         })

    }
})
router.delete("/")

module.exports = router