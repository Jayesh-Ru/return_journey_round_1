import express from "express";
const productRouter = require('./products');

const router = express.Router();

router.use('/api/products',productRouter)

module.exports = router;
