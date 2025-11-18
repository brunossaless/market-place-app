import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello, world!</Text>
      <TouchableOpacity onPress={() => router.push("login")}>
        <Text className="text-red-400">Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
