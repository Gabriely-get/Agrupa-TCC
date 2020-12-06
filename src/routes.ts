const router = require('express').Router();

const ProductController = require('./controller/ProductController');

// router 
//     .get('/', ProductController.helloWorld)
//     .get('/products', ProductController.findProducts)
//     .post('/createProduct', ProductController.createProduct)

	router
		.post('/admin/signup')

module.exports = router;