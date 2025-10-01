import express from "express";
import { createProduct, getProducts, getProductById } from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct); // later add protect + admin middleware
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
