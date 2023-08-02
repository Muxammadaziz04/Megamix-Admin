import { api } from "./api"

export const createSlider = async (image) => {
    const { data } = await api.post('/slider', { image })
    return data
}

export const getSlider = async () => {
    const { data } = await api.get('/sliders')
    return data
}

export const deleteSlider = async (id) => {
    const { data } = await api.delete(`/slider/${id}`)
    return data
}