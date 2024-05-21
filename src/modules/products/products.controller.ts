import { Request, Response } from 'express'
import { ProductModel } from './products.model'
import { ProductServices } from './products.service'

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body
  const result = await ProductModel.create(productData)
  res.json({
    success: true,
    message: 'Product is created successfully',
    dta: result,
  })
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'could not fetch products!',
      error: err,
    })
  }
}
export const ProductControllers = {
  createProduct,
  getAllProducts,
}
