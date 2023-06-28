
/**
 * Lógica de negocio para microservicio de carrito de compras
 * @author John Alejandro Zúñiga Galindo
 */

import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getCartProducts = async (req: Request, res: Response) => {

    //TO DO: Filtrar los elementos
    try {
        const cartProduct = await prisma.cart.findMany()
        res.json(cartProduct)
    } catch (error) {
        console.error('Ocurrio un error', error)
        res.status(503)
        res.json({ error: 'Service Unavailable' })
    }
}


export const addProductsToCart = async (req: Request, res: Response) => {

    const { productId, quantity } = req.body

    try {
        const cartProduct = await prisma.cart.create(
            {
                data: {
                    productId,
                    quantity
                }
            }
        )
        res.json(cartProduct)
    } catch (error) {
        console.error('No se pudo ingresar el producto al carrito', error)
        res.status(503)
        res.json({ error: 'Service Unavailable' })
    }
    // TO DO: Agregar un producto al carrito
}