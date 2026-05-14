import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import ToDoItem from "./todoItem";
import { Todo } from "@/app/store/todos";

type Props = {
  todos: Todo[];
  onPress: (todo: Todo) => void;
  onEdit: (id: number, newTxt: string) => void;
};

export default function TodoList({ todos, onPress, onEdit }: Props) {
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
          todo={todo}
          onPress={onPress}
          onEdit={(newTxt) => onEdit(todo.id, newTxt)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  emptyTitle: {
    color: "#424247",
    fontFamily: "Verdana",
    fontSize: 18,
    fontWeight: "600",
  },
  emptySubtitle: {
    color: "#666",
    fontFamily: "Verdana",
    fontSize: 14,
    marginTop: 4,
  },
  list: {
    paddingHorizontal: 10,
  },
});
