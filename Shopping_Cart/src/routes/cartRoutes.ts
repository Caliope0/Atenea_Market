import express, { Request, Response, Router} from 'express'
import { addProductsToCart, getCartProducts } from '../controllers/cartController'


/**
 * Rutas de microservicio Carrito de compras
 * @author John Alejandro Zúñiga Galindo
 * 
*/

const myRouter:Router= Router()

myRouter.get('/', getCartProducts)
myRouter.post('/', addProductsToCart)

export default myRouter