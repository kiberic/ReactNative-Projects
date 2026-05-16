import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <Ionicons size={size} name="airplane-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: 'ToDo',
          tabBarIcon: ({ color,size }) => <Ionicons name="checkmark-done-outline" size={size} color={color}/>,
        }}
      />
      <Tabs.Screen
      name="reg"
      options={{
        title: "Registration",
        tabBarIcon: ({ color,size }) => <Ionicons name="person-add-outline" size={size} color={color}/>,
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color,size }) => <Ionicons name="person-add" size={size} color={color}/>,
      }}/>
      <Tabs.Screen
        name="users"
        options={{
          title: "Users",
          tabBarIcon: ({ color,size }) => <Ionicons name="person" size={size} color={color}/>,
      }}/> 
    </Tabs>
  );
}
