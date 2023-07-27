import { api } from "./api";

export const createVacancy = async (fd) => {
    const { data } = await api.post('/vacancy', fd)
    return data
}

export const getVacancy = async () => {
    const { data } = await api.get('/vacancy')
    return data
}

export const getVacancyById = async (id) => {
    const { data } = await api.get(`/vacancy/${id}`)
    return data
}

export const updateVacancy = async (id, body) => {
    const { data } = await api.put(`/vacancy/${id}`, body)
    return data
}

export const deleteVacancy = async (id) => {
    const { data } = await api.delete(`/vacancy/${id}`)
    return data
}