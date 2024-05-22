import { Request, Response } from 'express'
import { ProductModel } from './products.model'
import { ProductServices } from './products.service'
import productValidationSchema from './products.validation'

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body

  //data validation using zod
  const zodParsedData = productValidationSchema.parse(productData)
  const result = await ProductModel.create(zodParsedData)
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductServices.getSingleProduct(productId)
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Could not fetch the product',
      error: err,
    })
  }
}

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const data = req.body
    const updatedProduct = productValidationSchema.parse(data)

    const result = await ProductServices.updateProduct(
      productId,
      updatedProduct,
    )
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    await ProductServices.deleteProductById(productId)
    res.json({
      success: true,
      message: 'Product Deleted successfully!',
      data: null,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProductById,
  deleteProductById,
}
