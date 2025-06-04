import { ImageBackground } from "expo-image";
import { useFocusEffect } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { loadTasks } from "../lib/storage";
import { Task } from "../types";

export default function StatsScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useFocusEffect(() => {
    loadTasks().then(setTasks);
  });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <ImageBackground
      source={require("../assets/images/bg_3.jpg")}
      style={{ width: "100%", height: "100%" }}
      className="absolute inset-0"
      contentFit="cover"
    >
      <View className="flex-1 items-center justify-center">
        <Text className="text-4xl font-bold mb-4 text-black dark:text-white">
          📊 Task Stats
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300">
          Total Tasks: {total}
        </Text>
        <Text className="text-xl text-green-600 dark:text-green-400">
          Completed: {completed}
        </Text>
        <Text className="text-xl text-red-600 dark:text-red-500">
          Pending: {pending}
        </Text>
      </View>
    </ImageBackground>
  );
}
