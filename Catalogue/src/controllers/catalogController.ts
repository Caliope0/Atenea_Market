
/**
 * Lógica de negocio para microservicio de carrito de compras
 * @author John Alejandro Zúñiga Galindo
 */

import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getProductInventory = async (req: Request, res: Response) => {

    //TO DO: Filtrar los elementos
    try {
        const ProductInventory = await prisma.product.findUnique(
            {
                where:{
                    id:1
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