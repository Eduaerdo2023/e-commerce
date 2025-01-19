import express from "express";
import formidable from "express-formidable";
const router = express.Router();
import checkId from "../middlewares/checkId.js";

import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";

// Controllers
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts
} from "../controllers/productController.js";

router
  .route("/")
  .post(authenticate, authorizedAdmin, formidable(), addProduct)
  .get(fetchProducts);

router.route("/allproducts").get(fetchAllProducts);
router.route('/:id/reviews').post(authenticate,checkId, addProductReview )
router.get('/top', fetchTopProducts)
router.get('/new', fetchNewProducts)

router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorizedAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizedAdmin, removeProduct);

export default router;
