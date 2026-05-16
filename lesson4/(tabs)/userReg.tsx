import React, { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import UserInput from "@/components/user_reg/userInput";
import { User } from "@/app/users/users";

export default function UserRegScreen() {
  const [user, setUser] = useState<User | null>(null);

  function handleAdd(newUser: User) {
    setUser(newUser);
    router.push({
      pathname: "/profile",
      params: { 
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone
      }
    });
  }

  return (
    <View style={{ padding: 16 }}>
      <UserInput onAdd={handleAdd} />
    </View>
  );
}
