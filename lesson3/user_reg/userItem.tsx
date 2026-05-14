import React, { use } from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { User } from "@/app/users/users"

type Props = {
    user: User;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

export default function UserItem({ user, onToggle, onDelete }: Props) {
    return (
        <View style={styles.item}>
            <Text style={styles.txt}>
                {user.fname} {user.lname}, {user.age} years
            </Text>
            <Text style={{ color: user.active ? "green" : "yellow" }}>
                {user.active ? "Active" : "Not Active"}
            </Text>
            <View style={styles.btns}>
                <Button title="Toggle" onPress={() => onToggle(user.id)}/>
                    <Button title="Delete" color="red" onPress={() => onDelete(user.id)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8
    },
    txt: {
        fontSize: 18,
        marginBottom: 6
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6
    }
})