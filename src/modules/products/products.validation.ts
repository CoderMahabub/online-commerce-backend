import { z } from 'zod'

// Define the Variant schema with error messages
const variantValidationSchema = z.object({
  type: z
    .string()
    .min(1, { message: 'Variant type is required and cannot be empty' }),
  value: z
    .string()
    .min(1, { message: 'Variant value is required and cannot be empty' }),
})

// Define the Inventory schema with error messages
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int({ message: 'Quantity must be a non-negative integer' })
    .nonnegative({ message: 'Quantity must be a non-negative integer' }),
  inStock: z.boolean({ required_error: 'InStock field is required' }),
})

// Define the Product schema with error messages
const productValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Product name is required and cannot be empty' }),
  description: z
    .string()
    .min(1, { message: 'Product description is required and cannot be empty' }),
  price: z
    .number()
    .nonnegative({ message: 'Price must be a non-negative number' }),
  category: z
    .string()
    .min(1, { message: 'Category is required and cannot be empty' }),
  tags: z
    .array(z.string().min(1, { message: 'Tag cannot be empty' }))
    .min(1, { message: 'At least one tag is required' }),
  variants: z
    .array(variantValidationSchema)
    .min(1, { message: 'At least one variant is required' }),
  inventory: inventoryValidationSchema,
})

export default productValidationSchema
