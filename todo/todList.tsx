import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import ToDoItem from "./todoItem";

type Todo = {
  id: number;
  text: string;
};

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTxt: string) => void;
};

export default function TodoList({ todos = [], onDelete, onEdit }: Props) {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Not tasks...</Text>
        <Text style={styles.emptySubtitle}>Added tasks</Text>
      </View>
    );
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.list}>
      {todos.map((todo) => (
        <ToDoItem 
          key={todo.id} 
          text={todo.text} 
          onDelete={() => onDelete(todo.id)} 
          onEdit={(newTxt) => onEdit(todo.id, newTxt)}/>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 12,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    margin: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 12,
  },
  emptyTitle: {
    color: "#00ffae",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  emptySubtitle: {
    color: "#fff",
    fontSize: 14,
  },
});
