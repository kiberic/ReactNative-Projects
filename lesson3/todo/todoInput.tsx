import React, { useState } from "react";
import { Keyboard, TextInput, Button, View, StyleSheet } from "react-native";
type Props = {
    onAdd: (text: string) => void;
}
export default function ToDoInput({onAdd}: Props) {
    const [text,setText] = useState('');

    function handleAdd() {
        if (!text.trim()) return;
        onAdd(text.trim());
        setText('');
        Keyboard.dismiss(); // клавиатура скрытие
    }
    return (
        <View>
            <TextInput
            style={styles.text}
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleAdd}
            placeholder="New Task"
            placeholderTextColor="red"/>

            <Button title="Added task" onPress={handleAdd}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: "#828282e8",
        padding:4,
        margin: 6,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 4,
        color: "#fff",
        fontFamily: "sans-serif",
        fontSize: 14
    }
})