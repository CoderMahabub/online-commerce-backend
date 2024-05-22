"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./modules/products/product.routes");
const orders_routes_1 = require("./modules/orders/orders.routes");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use('/api/products', product_routes_1.ProductRoutes);
app.use('/api/orders', orders_routes_1.orderRoutes);
// middleware function to check all client request
app.all('*', async (req, res, next) => {
    res.status(500).json({
        success: false,
        message: 'Route Not Found',
    });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
