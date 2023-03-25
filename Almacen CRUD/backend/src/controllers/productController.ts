import { createProduct, findAllProducts, findProductById, modifyProductById, removeProductById } from './../services/productService';
import { NextFunction, Request, Response } from "express";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";

export const deleteProducts = catchAsyncErrors(async ({ params }: Request, res: Response, next: NextFunction) => {
    const { id } = params;
    const existProduct = await findProductById(id);
    if (!existProduct) return next(res.status(404).json({ msg: `No existe un producto con el id: ${id}` }));
    const product = await removeProductById(id);
    if (!product) return next(res.status(400).json({ msg: 'No se pudo eliminar el producto' }))
    res.status(200).json({ msg: 'Producto eliminado', data: existProduct });
});

export const getProducts = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const products = await findAllProducts();
    res.status(200).json(products);
});

export const getProduct = catchAsyncErrors(async ({ params }: Request, res: Response, next: NextFunction) => {
    const { id } = params;
    const product = await findProductById(id);
    if (!product) return next(res.status(404).json({ msg: `No existe un producto con el id: ${id}` }));
    res.status(200).json(product);
});

export const postProducts = catchAsyncErrors(async ({ body }: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock } = body;
    const product = await createProduct({ name, description, price, stock });
    if (!product) return next(res.status(400).json({ msg: 'No se pudo registrar el producto' }));
    res.status(201).json({ msg: 'El producto fue creado con exito' });
});

export const updateProducts = catchAsyncErrors(async ({ body, params }: Request, res: Response, next: NextFunction) => {
    const { id } = params;
    const { name, description, price, stock } = body;
    const existProduct = await findProductById(id);
    if (!existProduct) return next(res.status(404).json({ msg: `No existe un producto con el id: ${id}` }));
    const product = await modifyProductById(id, { name, description, price, stock })
    if (!product[0]) return next(res.status(400).json({ msg: 'no se pudo actualizar el producto' }));
    res.status(200).json('Producto Actualizado');
});