const express = require("express")

const {create, consult, remove, update, filter}= require("../usecases/mentor.usecase")

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



router.get("/:id", async (request, response)=>{
    //Recibir el 
    const {params}=request

    try{
    //Ejecutar la funcion create del usercase
    const mentor = await consult(params.id)
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

router.get("/", async (request, response) => {
    try{
      const { query } = request
      // {}
      // { name: Alfredo }
      console.log(query)
      const mentors = await filter(query)
      response.json({
        success: true,
        data: {
          mentors
        }
      })
    }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })

router.patch("/:id", async (request, response)=>{
    //Recibir el request
    try{
    //Ejecutar la funcion update del usercase
    const {body,params}=request
    const mentor = await update(params.id, body)
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

router.delete("/:id", async (request, response)=>{
    //Recibir el request
    const {params}=request
    try{
    //Ejecutar la funcion create del usercase
    const mentor = await remove(params.id)
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