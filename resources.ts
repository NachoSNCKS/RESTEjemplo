interface Alumno{
    codigo: string,
    nombre: string
}
interface Profesor{
    codigo: string,
    nombre: string
}
abstract class Resource{
    abstract get(req, res)
    abstract getAll(req, res)
    abstract post(req, res)
    abstract put(req, res)
    abstract delete(req, res)
}
export class AlumnoResource extends Resource{
    post(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    
    static path : string ="/alumnos"

    get(req,res){
            let codigo = req.params.codigo
            let alumno : Alumno = {
                nombre: "20141175" ,
                codigo: "Nacho"
            }
            res.send(alumno)
    }

    getAll(req,res){
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
    }
}

export class ProfesorResource extends Resource{
    //Asignando nombre al path
    static path : string ="/profesor"

    get(req,res){
        let codigo = req.params.codigo
        let profesor : Profesor = {
            nombre: "1548125" ,
            codigo: "Quintana"
        }
        res.send(profesor)
    }
       
    getAll(req,res){
        //Se va a obtener un listado de alumnos
    let carrera = req.params.carrera
    
    res.send([
        {
            codigo: "15874525",
            nombre: "Irey"
        },
        {
            codigo: "87542154",
            nombre: "Frans"
        }
     ])
    }
    post(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.")
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.")
    }


}