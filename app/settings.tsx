import { ImageBackground } from "expo-image";
import { View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/bg_3.jpg")}
      style={{ width: "100%", height: "100%" }}
      className="absolute inset-0"
      resizeMode="cover"
    >
      <View className="flex-1 items-center justify-center">
        <Text className="text-4xl font-bold mb-4 text-black dark:text-white">
          ⚙️ Settings
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mb-2 px-6"> 
            This is a simple task manager app built with React Native and Expo.
            You can create, edit, and delete tasks. The app uses local storage to
            persist tasks across sessions.
        </Text>
        <Text className="text-3xl text-gray-700 dark:text-white mt-2">
          Instructions.
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6"> 
            To get started, simply enter a task in the input field and press the
            &quot;Add Task&quot; button. You can then edit or delete tasks as needed.
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6"> 
            To mark a task as completed, press the checkbox next to the task.
            Completed tasks will be shown with a strikethrough.
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6"> 
            To Delete a task, press and hold on the task you want to delete.
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6"> 
            To Edit a task, press the edit button on the task you want to edit.
            You can then modify the task and press the save button to update it.
        </Text>
        <Text className="text-xl text-gray-700 dark:text-gray-300 text-center mt-4 px-6"> 
            The app also provides a stats screen where you can view the total number
            of tasks, completed tasks, and pending tasks.
        </Text>
      </View>
    </ImageBackground>
  );
}
