import express, { Request, Response, Router} from 'express'
import { getProductInventory } from '../controllers/catalogController'


/**
 * Rutas de microservicio Carrito de compras
 * @author John Alejandro Zúñiga Galindo
 * 
*/

const myRouter:Router= Router()

myRouter.get('/:idProduct', getProductInventory)


export default myRouter