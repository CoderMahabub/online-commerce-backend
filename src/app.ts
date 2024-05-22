import express, { NextFunction, Request, Response } from 'express'
import { ProductRoutes } from './modules/products/product.routes'
import { orderRoutes } from './modules/orders/orders.routes'
const app = express()

//parser
app.use(express.json())

app.use('/api/products', ProductRoutes)
app.use('/api/orders', orderRoutes)

// middleware function to check all client request
app.all('*', async (req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'Route Not Found',
  })
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
