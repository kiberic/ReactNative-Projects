import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, Pressable, Text, View, StyleSheet } from "react-native";
import { deleteTodo, getTodoById, Todo, toggleTodo } from "../store/todos";

export default function TodoDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const [todo, setTodo] = useState<Todo | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadTodo()
    }, [id])

    async function loadTodo() {
        try {
            setLoading(true)
            setError(null)
            const data = await getTodoById(Number(id))
            setTodo(data)
        } catch (error) {
            setError(`Ошибка: ${error}`)
        } finally {
            setLoading(false)
        }
    }
async function handleToggleDone() {
        if (!todo) return
        try {
            const updated = await toggleTodo(todo.id, !todo.completed)
            setTodo(updated)
            router.back()
        } catch (error) {
            setError(`Ошибка: ${error}`)
        }
    }

    async function handleDelete() {
        if (!todo) return
        try {
            await deleteTodo(todo.id)
            router.back()
        } catch (error) {
            setError(`Ошибка: ${error}`)
        }

    }

    if (loading) {
            return (
                <View>
                    <ActivityIndicator size='large'/>
                    <Text>Загрузка</Text>
                </View>
            )
        }

        if (error || !todo) {
            return (
                <View>
                    <Text>{error ?? 'Задача не найена'}</Text>
                    <Button title="Назад" onPress={() => router.back()} />
                </View>
            )
        }

    return (
        <View>
            <Text style={styles.titleTodo}>{todo.title} {id}</Text>
            <View style={styles.isDone}>
                <Text style={todo ? {color: 'red'} : {color: 'green'}}>{todo.completed ? 'Done' : 'Not done...'}</Text>
            </View>
            <Button title="удалить" onPress={handleDelete} />
            <Button title="Выполнить" onPress={handleToggleDone} />
        </View>
    )
}

const styles = StyleSheet.create({
    titleTodo: {
        padding: 18,
        color: "#fff",
        fontSize: 28,
        alignSelf: "center",
        fontWeight: "900"
    },
    isDone: {
        padding: 18,
        color: "#fff",
        fontSize: 28,
        alignSelf: "center",
        fontWeight: "900"
    }
})