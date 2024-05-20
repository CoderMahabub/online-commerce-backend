import { Product } from './products.interface'
import { ProductModel } from './products.model'

const createProduct = async (payload: Product) => {
  const result = await ProductModel.create(payload)
  return result
}

export const ProductServices = { createProduct }
