import { Product } from './products.interface'
import { ProductModel } from './products.model'

const createProduct = async (payload: Product) => {
  const result = await ProductModel.create(payload)
  return result
}
const getAllProducts = async () => {
  const result = await ProductModel.find()
  return result
}

const getSingleProduct = async (_id: string) => {
  const result = await ProductModel.findOne({ _id })
  return result
}

const updateProduct = async (_id: string, updatedProduct: Product) => {
  const result = await ProductModel.findByIdAndUpdate(
    _id,
    {
      $set: {
        ...updatedProduct,
      },
    },
    { new: true },
  )

  return result
}

const deleteProductById = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete(_id)
  return result
}

//Search product
const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i')
  const result = await ProductModel.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  })
  return result
}

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProductById,
  searchProducts,
}
