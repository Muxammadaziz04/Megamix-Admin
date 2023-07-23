import { api } from "./api";

export const getProductCategories = async () => {
    const { data } = await api.get('/categories')
    return data
}

export const getProducts = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/products?${params}`)
    return data
}

export const createProduct = async (fd) => {
    const { data } = await api.post('/product', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}

export const deleteProduct = async (id) => {
    await api.delete(`/product/${id}`)
}

export const getProductById = async (id) => {
    const { data } = await api.get(`/product/${id}`)
    return data
}

export const updateProduct = async (id, fd) => {
    const { data } = await api.put(`/product/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}