/**
 * Archivo principal del microservicio del catálogo
 * @author John Alejandro Zúñiga Galindo
 */

import express, {Application, Request, Response, NextFunction} from 'express'

import catalogRoutes from './routes/catalogRoutes'

const app:Application = express()

app.use(express.json())
/**
 * Agregar al stack un conjunto de rutas
 */
app.use('/', catalogRoutes)


/**
 * Resuesta cuando la ruta no existe
 */
app.use(
    (req:Request, res:Response, next:NextFunction)=>{
         
        res.status(404)
        res.json({ message:"Upss. El recurso no existe"})

    }
)

app.use(
    (error:Error, req:Request, res:Response, Next:NextFunction)=>{
        
        res.status(500)
        console.log(error)
        res.json({message:"Houston tenemos un problema!!"})
    }
)

export default app
