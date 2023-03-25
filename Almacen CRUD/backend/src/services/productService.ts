import { Product } from "../database/models/Product";

export const createProduct = async (data = {}) => {
    const product = await Product.create({ ...data });
    return product;
}

export const findProductById = async (id: number | string) => {
    const product = await Product.findByPk(id);
    return product;
}

export const findOneProduct = async (data = {}) => {
    const product = await Product.findOne({ where: { ...data } });
    return product;
}

export const findAllProducts = async () => {
    const products = await Product.findAll();
    return products;
}

export const findAndCountAllProducts = async () => {
    const { count, rows } = await Product.findAndCountAll();
    return { count, products: rows }
}

export const modifyProductById = async (id: number | string, data = {}) => {
    const product = await Product.update({ ...data }, { where: { id } });
    return product;
}

export const removeProductById = async (id: number | string) => {
    const product = await Product.destroy({ where: { id } });
    return product;
}