import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import "../global.css"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          height: 65,
          paddingBottom: 1,
        },
        tabBarActiveTintColor: "#059669",
        tabBarInactiveTintColor: "#9ca3af",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="detection"
        options={{
          title: "Detection",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-circle-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
