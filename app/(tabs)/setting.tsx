import { View, Text, Switch } from "react-native";
import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-white p-6 pt-14">
      <Text className="text-3xl font-bold text-green-700">Settings</Text>

      <View className="flex-row items-center justify-between mt-6">
        <Text className="text-lg">Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}
