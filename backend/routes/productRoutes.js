import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/item/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/item/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)
router.route('/category').get(getProductsByCategory)

export default router
