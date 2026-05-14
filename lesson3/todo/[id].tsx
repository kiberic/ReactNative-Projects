import { router, useLocalSearchParams } from "expo-router";
import { deleteTodo, todoStore, toggleTodo } from "../store/todos";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function TodoDetailScreen() {
    const { id } = useLocalSearchParams<{id: string}>()
    const todo = todoStore.find((t) => t.id === Number(id))
    if (!todo) {
        return (
            <View>
                <Text>Task is not found...</Text>
                <Button title="Back" onPress={() => router.back()} />
            </View>
        )
    }

    function handleToggleDone() {
        toggleTodo(Number(id))
    }

    function handleDelete(id: number) {
        const todoId = Number(id)
        Alert.alert(
            "Delete current task?",
            "This irreversibly!", 
            [
                {text: "Cancel", style: "cancel"},
                {text: "Delete", onPress: () => {
                    deleteTodo(todoId)
                    router.back()
                }}
            ])
            deleteTodo(id)
            router.back()
        }

    return (
        <View>
            <Text>ID Task: {todo.id}</Text>
            <Text>Content: {todo.text}</Text>
            <Text>{todo.is_done ? "Not ready" : "Done"}</Text>
            <Button title="Delete" onPress={() => handleDelete(todo.id)}/>
            <Button title="Execute" onPress={() => handleToggleDone()}/>
        </View>
    )
}

const styles = StyleSheet.create({

})