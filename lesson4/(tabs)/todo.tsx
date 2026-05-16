import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet,ActivityIndicator, ScrollView } from'react-native';
import ToDoInput from '@/components/todo/todoInput'
import TodoList from '@/components/todo/todList'
import { addTodo, deleteTodo, Todo, getTodos } from '../store/todos'
import { useFocusEffect, router } from 'expo-router';


export default function TodoScreen() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadTodos();
    }, [])

    async function loadTodos() {
        try {
            setLoading(true)
            setError(null)
            const data = await getTodos()
            setTodos(data)
        } catch (error) {
            setError(`Ошибка: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    async function handleAdd (title: string) {
        try {
            const newTodo = await addTodo(title)
            setTodos(prev => [...prev, newTodo])
        } catch (error) {
            setError(`Ошибка: ${error}`)
        }
    }

    function handlePress(todo: Todo) {
        router.push({ pathname: '/todo/[id]', params: {id: todo.id}})
    }

    if (loading) {
        return (
            <View>
                <ActivityIndicator size='large'/>
                <Text>Загрузка</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
    }

    function handleEdit(id: number, newTxt: string) {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, text: newTxt} : todo
            )
        );
    }
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.textCount}>To Do count: {todos.length}</Text>
                    <View style={styles.TodoContainer}>
                        <TodoList todos={todos} onPress={handlePress} onEdit={handleEdit}/>
                    </View>
                </View>
                <ToDoInput onAdd={handleAdd}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textCount: {
        color: "green",
        fontSize: 16,
        marginBottom: 9
    },
    container: {
        alignItems: "center"
    },
    TodoContainer: {
        backgroundColor: "#00ea8555",
        padding: 12,
        width: 500,
        justifyContent: "center",
    },
})