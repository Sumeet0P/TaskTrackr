import { ImageBackground } from "expo-image";
import { useEffect, useState } from "react";
import { saveTasks, loadTasks } from '../lib/storage';

import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  editing?: boolean; // Optional property for editing state
};

export default function Index() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from AsyncStorage
  useEffect(() => {
  const fetchTasks = async () => {
    const saved = await loadTasks();
    setTasks(saved);
  };
  fetchTasks();
}, []);


  // Save tasks to AsyncStorage whenever tasks change
  useEffect(() => {
  saveTasks(tasks);
}, [tasks]);


  const addTask = () => {
    if (task.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: task,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTask("");
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const toggleEdit = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, editing: !t.editing } : { ...t, editing: false }
      )
    );
  };

  const deleteTask = (id: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setTasks((prev) => prev.filter((t) => t.id !== id)),
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg_3.jpg")}
      style={{ width: "100%", height: "100%" }}
      className="absolute inset-0"
      contentFit="cover"
    >
      <View className="flex-1 p-4 items-center justify-start mt-[5vh]">
        <Text className="text-3xl font-bold text-gray-100 my-1">
          TaskTrackr
        </Text>
        <Text className="text-xl font-bold text-gray-100 my-1">
          Your own task manager
        </Text>
        <Text className="font-bold text-gray-100 mt-2 mb-4">
          Create Edit Delete
        </Text>

        <View className="flex-row mb-4">
          <TextInput
            className="flex-1 font-bold border text-white border-gray-300 rounded-xl px-3 py-4 mr-2"
            placeholder="Enter a new task"
            placeholderTextColor="white"
            value={task}
            onChangeText={setTask}
          />
          <Pressable
            onPress={addTask}
            className="bg-[#004dff] px-4 rounded-2xl justify-center"
          >
            <Text className="text-white font-semibold px-3">Add</Text>
          </Pressable>
        </View>
        <FlatList
          className="flex-1 w-full my-2 py-2 mb-[12vh] rounded-2xl opacity-80"
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => toggleComplete(item.id)}
              onLongPress={() => deleteTask(item.id)}
              className={`p-5 mb-2 rounded-2xl font-bold ${
                item.completed ? "bg-gray-400" : "bg-white"
              }`}
            >
              {item.editing ? (
                <View className="flex-row items-center">
                  <TextInput
                    className="flex-1 border font-bold border-gray-300 rounded px-2 py-2"
                    value={item.title}
                    onChangeText={(text) =>
                      setTasks((prev) =>
                        prev.map((t) =>
                          t.id === item.id ? { ...t, title: text } : t
                        )
                      )
                    }
                  />
                  <Pressable
                    onPress={() => toggleEdit(item.id)}
                    className="ml-2 px-4 py-3 bg-green-500 rounded-lg"
                  >
                    <Text className="text-white font-semibold">Save</Text>
                  </Pressable>
                </View>
              ) : (
                <View className="flex-row justify-between items-center">
                  <Text
                    className={`text-lg flex-1 font-bold ${
                      item.completed
                        ? "line-through text-gray-200 italic"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </Text>
                  <Pressable
                    onPress={() => toggleEdit(item.id)}
                    className="ml-2 px-4 py-3 bg-[#004dff] rounded-lg"
                  >
                    <Text className="text-white font-semibold">Edit</Text>
                  </Pressable>
                </View>
              )}
            </Pressable>
          )}
        />
      </View>
    </ImageBackground>
  );
}
