import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProfileScreen() {
  const { name, email, phone } = useLocalSearchParams();

  if (!name || !email || !phone) {
    return (
      <View style={styles.screen}>
        <Text style={styles.empty}>Not User...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>User Profile</Text>
          <Text style={styles.info}>First name: {name}</Text>
          <Text style={styles.info}>Email: {email}</Text>
          <Text style={styles.info}>Number phone: {phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  itemContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
  empty: {
    fontSize: 18,
    color: "gray",
  },
});
