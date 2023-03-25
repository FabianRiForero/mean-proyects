import { Router } from "express";
import { deleteProducts, getProduct, getProducts, postProducts, updateProducts } from "../controllers/productController";
const router = Router();

router.get('/', getProducts);
router.post('/', postProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

export default router;