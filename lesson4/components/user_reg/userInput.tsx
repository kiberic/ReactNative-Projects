import React, { useState } from "react";
import { Keyboard, TextInput, Button, View, StyleSheet } from "react-native";
import { User } from "@/app/users/users"

type Props = {
    onAdd: (user: User) => void;
}

export default function UserInput({onAdd}: Props) {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [age, setUAge] = useState("");
    
    function handleAddUser() {
        if (!fname.trim() || !lname.trim() || !age) return;

        const newUser: User = {
            id: Date.now(),
            fname, lname, age: Number(age),
            active: true
        };
        onAdd(newUser);
        setFName("");
        setLName("");
        setUAge("");
        Keyboard.dismiss();
    }
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textData}
            value={fname}
            onChangeText={setFName}
            placeholder="First name"
            />
            <TextInput 
            style={styles.textData}
            value={lname}
            onChangeText={setLName}
            placeholder="Last name"
            />
            <TextInput 
            style={styles.textData}
            value={age}
            onChangeText={setUAge}
            placeholder="User age"
            />
            <Button title="Submit" 
            onPress={handleAddUser}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        gap: 8
    },
    textData: {
        borderWidth: 1,
        borderColor: "#920000",
        backgroundColor: "#a499fba8",
        color: "#fff",
        fontSize: 15,
        padding: 9,
        borderRadius: 4
    }
})