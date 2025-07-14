import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        style="light"
      />
      <Login />

      {/* <Signup /> */}

    </View>
  );
}
