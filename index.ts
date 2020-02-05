import * as express from "express"
import {AlumnoResource, ProfesorResource} from "./resources"
let app : express.Application = express()
let alumnosResource = new AlumnoResource()
let profesorResource = new ProfesorResource()

//Recurso Alumnos
app.get("/alumnos/:codigo", alumnosResource.get)
app.get("/alumnos", alumnosResource.getAll)

//Recurso Profecor
app.get("/profesor/:codigo", profesorResource.get)
app.get("/profesor", profesorResource.getAll)


app.listen(3000, () => {
    console.log("Servidor ejecutandose...")
})