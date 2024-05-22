import express, { Request, Response } from 'express'
import { ProductRoutes } from './modules/products/product.routes'
import { orderRoutes } from './modules/orders/orders.routes'
const app = express()

//parser
app.use(express.json())

app.use('/api/products', ProductRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
