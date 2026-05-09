import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, Button, StyleSheet } from "react-native";

type Props = {
  text: string;
  onDelete: () => void;
  onEdit: (newTxt: string) => void;
};

export default function ToDoItem({ text, onDelete, onEdit }: Props) {
  const [pressed, setPressed] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [draft, setDraft] = useState(text);

  return (
    <View style={styles.itemContainer}>
      {isEdit ? (
        <TextInput style={styles.btnInput}
        value={draft}
        onChangeText={setDraft}
        underlineColorAndroid="transparent"/>
      ) : (
        <Text style={styles.itemText}>{text}</Text>
      )}
      <View style={styles.btnContainer}>
        {/* <Button title="Delete 1" color="red" onPress={onDelete} />

        <TouchableOpacity style={styles.button2} onPress={onDelete} activeOpacity={0.6}>
          <Text style={styles.buttonTxt}>Delete</Text> */}
        {/* </TouchableOpacity> */}

        <Pressable
          style={pressed ? [styles.button3, styles.button3Active] : styles.button3}
          onPress={onDelete}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          <Text style={styles.buttonTxt}>{pressed ? "Отпустить" : "Delete"}</Text>
        </Pressable>
        {isEdit ? (
          <Pressable
          style={styles.button3}
          onPress={() => {
            onEdit(draft)
            setIsEdit(false)
          }}>
            <Text style={styles.buttonTxt}>Save</Text>
          </Pressable>
        ): (
          <Pressable style={styles.button3} onPress={() => {
            onEdit(draft);
            setIsEdit(true);
            }}>
            <Text style={styles.buttonTxt}>{draft ? "Редактировать задачу" : "Save"}</Text>
          </Pressable>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#5cad0ba1",
    padding: 12,
    marginVertical: 6,
    borderRadius: 6,
    borderColor: "#00ffae",
    borderWidth: 1,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "space-around",
    marginTop: 8,
  },
  buttonTxt: {
    color: "#fff",
    margin: 2,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Verdana"
  },
  button2: {
    backgroundColor: "rgba(0, 37, 160, 0.55)",
    borderRadius: 6,
    padding: 9,
  },
  button3: {
    backgroundColor: "purple",
    borderRadius: 4,
    padding: 9,
  },
  button3Active: {
    backgroundColor: "#ff040462",
  },
  btnInput: {
    borderWidth: 0,
    borderColor: "transparent",
    color: "white",
    borderRadius: 6,
    backgroundColor: "#939393",
    marginBottom: 8,
    padding: 8,
  }
});
