import * as express from "express"

let app : express.Application = express()

interface Alumno{
    codigo: string
    nombre: string
}
//Recurso Alumnos
 
 
 
app.get("/alumnos/:codigo"/*/alumnos/20141175*/, (req /*request*/ ,res /*result*/) => {
    let alumno : Alumno = {
        nombre: "20141175" ,
        codigo: "Nacho"
    }
    res.send(alumno)
})

app.get("/alumnos", (req,res) => {
    //Se va a obtener un listado de alumnos
    let carrera = req.params.carrera

    res.send([
        {
            codigo: "20142353",
            nombre: "Porritas"
        },
        {
            codigo: "20143260",
            nombre: "Renato"
        }
    ])
})

app.listen(3000, () => {
    console.log("Servidor ejecutandose...")
})