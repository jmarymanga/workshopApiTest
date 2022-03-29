const Product = require('../models/product.model');

module.exports.createProduct = async (request, response) => {
    const { name, description, price, stock, useId,createdAt } = request.body;
   
    const product = await Product.create({
        name, 
        description, 
        price, 
        stock, 
        useId
         
    });
    response.status(201).json({
        message: "Product created successfully",
        product
    })
}
