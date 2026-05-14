import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from'react-native';
import ToDoInput from '@/components/todo/todoInput'
import TodoList from '@/components/todo/todList'
import { addTodo, deleteTodo, Todo, todoStore } from '../store/todos'
import { useFocusEffect, router } from 'expo-router';


export default function ToDoScreen() {
    const [todos, setTodos] = useState<Todo[]>(todoStore)

    useFocusEffect(
        useCallback(() => {
            setTodos([...todoStore])
            return () => {}
        }, [])
    )

    function handleAdd(text:string) {
        addTodo(text);
        setTodos([...todoStore])
    }


    function handlePress(todo: Todo) {
        router.push({ pathname: '/todo/[id]', params: {id: todo.id} })
    }

    function handleEdit(id: number, newTxt: string) {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, text: newTxt} : todo
            )
        );
    }
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textCount}>To Do count: {todos.length}</Text>
                <View style={styles.TodoContainer}>
                    <TodoList todos={todos} onPress={handlePress} onEdit={handleEdit}/>
                </View>
            </View>
            <ToDoInput onAdd={handleAdd}/>
        </View>
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