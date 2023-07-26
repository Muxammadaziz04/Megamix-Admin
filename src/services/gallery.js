import { api } from "./api";

export const createFotoGallery = async (fd) => {
    const { data } = await api.post('/foto', fd)
    return data
}

export const getFotoGallery = async () => {
    const { data } = await api.get('/foto')
    return data
}

export const getFotoGalleryById = async (id) => {
    const { data } = await api.get(`/foto/${id}`)
    return data
}

export const updateFotoGallery = async (id, body) => {
    const { data } = await api.put(`/foto/${id}`, body)
    return data
}

export const deleteFotoGallery = async (id) => {
    const { data } = await api.delete(`/foto/${id}`)
    return data
}

export const createVideoGallery = async (fd) => {
    const { data } = await api.post('/video', fd)
    return data
}

export const getVideoGallery = async () => {
    const { data } = await api.get('/video')
    return data
}

export const getVideoGalleryById = async (id) => {
    const { data } = await api.get(`/video/${id}`)
    return data
}

export const updateVideGallery = async (id, body) => {
    const { data } = await api.put(`/video/${id}`, body)
    return data
}

export const deleteVideoGallery = async (id) => {
    const { data } = await api.delete(`/video/${id}`)
    return data
}

export const uploadFile = async (fd) => {
    const { data } = await api.post('/file', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}