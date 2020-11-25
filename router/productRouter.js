/**
 * /product/
 */
const express =require('express');
const router = express.Router();

const productController = require('../controller/productController');



//Peticion name product
router.get('/resumen', productController.resumen )
router.get('/images', productController.imagenes )

module.exports=router;