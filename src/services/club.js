import { api } from "./api";

export const createClub = async (fd) => {
    const { data } = await api.post('/club', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}

export const getClub = async (query) => {
    const params = new URLSearchParams(query)
    const { data } = await api.get(`/club?${params}`)
    return data
}

export const getClubById = async (id) => {
    const { data } = await api.get(`/club/${id}`)
    return data
}

export const deleteClub = async (id) => {
    const { data } = await api.delete(`/club/${id}`)
    return data
}

export const editClub = async (id, fd) => {
    const { data } = await api.put(`/club/${id}`, fd, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}