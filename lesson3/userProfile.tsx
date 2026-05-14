import React from "react";
import { useState } from "react";
import { User } from "@/app/users/users";
import UserInput from "../../components/user_reg/userInput";
import UserItem from "../../components/user_reg/userItem";
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

    function toggleUser(id: number) {
        setUsers((prev) => prev.map((u) => (u.id === id ? {...u, is_active: !u.active }: u)))
    }
    return (
        <View style={styles.container}>
        <View>
            <Button title="Registration" onPress={() => router.push("/user-reg")}/>
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