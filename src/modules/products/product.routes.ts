import express, { Request, Response } from 'express'
import { ProductModel } from './products.model'
import { ProductControllers } from './products.controller'
const router = express.Router()

// create product
router.post('/', ProductControllers.createProduct)

// Retrieve all products
router.get('/', ProductControllers.getAllProducts)

//Retrieve single product by id
router.get('/:productId', ProductControllers.getSingleProduct)

//Update single product by id
router.put('/:productId', ProductControllers.updateProductById)

//Delete single product by id
router.delete('/:productId', ProductControllers.deleteProductById)

export const ProductRoutes = router
