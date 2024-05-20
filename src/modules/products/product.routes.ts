import express, { Request, Response } from 'express'
import { ProductModel } from './products.model'
import { ProductControllers } from './products.controller'
const router = express.Router()

router.post('/', ProductControllers.createProduct)

export const ProductRoutes = router
