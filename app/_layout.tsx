import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 10,
          paddingTop: 10,
          height: 100,
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tasks",
          headerShown: false,
          tabBarIcon() {
            return <FontAwesome5 name="tasks" size={24} color="white" />;
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          headerShown: false,
          tabBarIcon() {
            return <AntDesign name="barschart" size={24} color="white" />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon() {
            return <Ionicons name="settings-outline" size={24} color="white" />;
          },
        }}
      />
    </Tabs>
  );
}
