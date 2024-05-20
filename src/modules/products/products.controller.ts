import { Request, Response } from 'express'
import { ProductModel } from './products.model'

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body
  const result = await ProductModel.create(productData)
  res.json({
    success: true,
    message: 'Product is created successfully',
    dta: result,
  })
}
export const ProductControllers = {
  createProduct,
}
