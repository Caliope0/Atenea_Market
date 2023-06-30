
/**
 * Lógica de negocio para microservicio de carrito de compras
 * @author John Alejandro Zúñiga Galindo
 */

import { PrismaClient } from "@prisma/client"
import { error } from "console"
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getProductInventory = async (req: Request, res: Response) => {

    const { idProduct } = req.params
    let myProduct = parseInt(idProduct)
    
    //verificar que idProduct sea un número

    if(isNaN(myProduct)){
        res.status(400)
        res.json({error: 'Bad Request'})
        return
    }

    try {
        const ProductInventory = await prisma.product.findUnique(
            {
                where: {
                    id: myProduct
                }
            }
        )
        res.json(ProductInventory)
    } catch (error) {
        console.error('Ocurrio un error', error)
        res.status(503)
        res.json({ error: 'Service Unavailable' })
    }
}