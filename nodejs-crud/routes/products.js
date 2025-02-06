const router = require('express').Router();
const { getProducts, createProduct } = require('../controllers/products');

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;
