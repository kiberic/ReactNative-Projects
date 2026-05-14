export type Todo = {
    id: number;
    text: string;
    is_done: boolean;
}
export let todoStore: Todo[] = [
    {id: 1, text: "Купить хлеб", is_done: false},
    {id: 2, text: "Купить одежду", is_done: true},
    {id: 3, text: "Купить машину", is_done: false},
    {id: 4, text: "Купить дом", is_done: false},
]
export function addTodo(text: string) {
    todoStore = [...todoStore, {id: Date.now(), text, is_done: false}]
}
export function deleteTodo(id: number) {
    todoStore = todoStore.filter((t) => t.id === id)
}
export function toggleTodo(id: number) {
    todoStore = todoStore.map((t) => t.id === id ? {...t, done: !t.is_done} : t)
}
