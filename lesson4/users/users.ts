import { create } from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const api = create({
    baseURL: BASE_URL
})

export async function addUser():Promise<User[]> {
    const response = await api.get<User[]>('/users')
    return response.data
}
export async function getUserById(id: number):Promise<User> {
    const response = await api.get<User>(`/users/${id}`)
    return response.data
}

export async function deleteUser(id: number) {
    await api.delete(`/users/${id}`)
}

export async function toggleUser(id: number):Promise<User> {
    const response = await api.patch<User>(`/users/${id}`)
    return response.data
}
