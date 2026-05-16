import React from "react";
import { useState } from "react";
import { toggleUser, User } from "@/app/users/users";
import UserInput from "./userInput";
import UserItem from "./userItem";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function UserProfile() {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);

    function addUser(user: User) {
        setUsers((prev) => [...prev, user]);
    }

    function deleteUser(id: number) {
        setUsers((prev) => prev.filter((u) => u.id !== id))
    }

    async function handleToggleUser(id: number) {
        try {
            const updatedUser = await toggleUser(id);
            setUsers((prev) =>
            prev.map((u) => (u.id === id ? updatedUser : u))
            );
        } catch (error) {
    console.error("Ошибка при обновлении пользователя:", error);
  }
}

    return (
        <View style={styles.container}>
        <View>
            <Button title="Registration" onPress={() => router.push("/users/users")}/>
        </View>
            <UserInput onAdd={addUser}/>
            <FlatList 
            data={users}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item}) => (
                <UserItem user={item} onToggle={toggleUser} onDelete={deleteUser} />            
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        color: "#fff"
    }
})