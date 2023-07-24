import { api } from "./api";

export const createNews = async (fd) => {
    const { data } = await api.post('/news', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}

export const getNews = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/news?${params}`)
    return data
}

export const getNewsById = async (id) => {
    const { data } = await api.get(`/news/${id}`)
    return data
}

export const deleteNews = async (id) => {
    const { data } = await api.delete(`/news/${id}`)
    return data
}

export const editNews = async (id, fd) => {
    const { data } = await api.put(`/news/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}