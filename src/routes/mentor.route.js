const express = require("express")

const {create, consult, remove, update}= require("../usecases/mentor.usecase")

//Haciendo un router
const router = express.Router()
// Endpoint de crear
router.post("/", async (request, response)=>{
    //Recibir el request
    try{
        const {body}=request
    //Ejecutar la funcion create del usercase
    const mentor = await create(body)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{mentor}
         })
    }
    catch(error){
        response.status(400)
    response.json({sucess:false,
        message:error
         })
    }
})



router.get("/", async (request, response)=>{
    //Recibir el request
    try{
    //Ejecutar la funcion create del usercase
    const mentor = await consult(request.query.id)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{mentor}
         })
    }
    catch(error){
        response.status(400)
    response.json({sucess:false,
        message:error
         })
    }
})

router.patch("/", async (request, response)=>{
    //Recibir el request
    try{
    //Ejecutar la funcion update del usercase
    const {body}=request
    const mentor = await update(request.query.id, body)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{mentor}
         })
    }
    catch(error){
        response.status(400)
    response.json({sucess:false,
        message:error
         })
    }
})

router.delete("/", async (request, response)=>{
    //Recibir el request
    try{
    //Ejecutar la funcion create del usercase
    const mentor = await remove(request.query.id)
    //Responder
    response.status(201)
    response.json({sucess:true,
        data:{mentor}
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