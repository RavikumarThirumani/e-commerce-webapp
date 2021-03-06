import express from "express";
const router = express.Router();
import { getProducts, getProductsById, deleteProduct, updateProduct, createProduct } from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductsById).delete(protect,admin, deleteProduct).
put(protect, admin, updateProduct)


export default router;
