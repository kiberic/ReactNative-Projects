import {create} from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const api = create({
    baseURL: BASE_URL
})

export async function getTodos(): Promise<Todo[]> {
    const response = await api.get<Todo[]>('/todos')
    return response.data
}

export async function getTodoById(id: number): Promise<Todo> {
    const response = await api.get<Todo>(`/todos/${id}`)
    return response.data
}

export async function addTodo(title: string): Promise<Todo> {
    const response = await api.post<Todo>("/todos", {
        title,
        completed: false,
        userId: 1
    })
    return response.data
}

export async function deleteTodo(id:number) {
    await api.delete(`/todos/${id}`)
}

export async function toggleTodo(id:number, completed: boolean): Promise<Todo> {
    const response = await api.patch<Todo>(`/todos/${id}`, {completed})
    return response.data
}