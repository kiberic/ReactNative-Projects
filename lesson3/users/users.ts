export type User = {
    id: number;
    fname: string;
    lname: string;
    age: number;
    active: boolean;
}

export let userData: User[] = []

export function addUser(user: User) {
    userData = [...userData, user]
}
export function deleteUser(id: number) {
    userData = userData.filter((u) => u.id !== id)
}
export function toggleUser(id: number) {
    userData = userData.map((u) => u.id === id ? {...u, active: !u.active}: u)
}
