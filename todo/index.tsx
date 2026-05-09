import React, { useState } from 'react';
import { View, Text, StyleSheet } from'react-native';
import ToDoInput from './todoInput'
import TodoList from './todList';

type Todo = {
    id: number;
    text: string;
};

export default function ToDo() {
    const [todos, setTodos] = useState<Todo[]>([
        {id:1, text: 'Дело 1'},
        {id:2, text: 'Дело 2'},
    ])

    function handleAdd(text:string) {
        const newTodo: Todo = {
            id: Date.now(),
            text,
        }
        setTodos([...todos, newTodo])
    }

    function handleDelete(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id))
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
                    <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit}/>
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