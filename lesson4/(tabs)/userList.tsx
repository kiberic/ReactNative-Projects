import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { User, addUser, deleteUser } from "@/app/users/users";
import UserItem from "@/components/user_reg/userItem";
import { router } from "expo-router";

export default function UsersTab() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await addUser(); // твой API вызов
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (users.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>Not Users...</Text>
      </View>
    );
  }

  return (

<FlatList 
  data={users}
  keyExtractor={(item)=> item.id.toString()}
  renderItem={({item}) => (
    <UserItem 
      user={item} 
      onToggle={() => handleToggleUser(item.id)} 
      onDelete={deleteUser} 
      onPress={() => router.push({
        pathname: "/profile",
        params: { 
          name: item.name,
          email: item.email,
          phone: item.phone
        }
      })}
    />            
  )}
/>


  );
}

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
  list: { padding: 12 },
  card: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
  },
  name: { fontSize: 18, fontWeight: "bold" },
});
