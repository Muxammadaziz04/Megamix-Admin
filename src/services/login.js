import { api } from "./api"

export const login = async (body) => {
    const { data } = await api.post('/login', body)
    return data
}

export const getMe = async () => {
    const { data } = await api.get('/me')
    return data
}