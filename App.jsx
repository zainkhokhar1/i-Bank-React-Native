import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import StackNavigator from "./src/navigation/StackNavigator";


export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        style="light"
      />

      <StackNavigator />

    </View>
  );
}
