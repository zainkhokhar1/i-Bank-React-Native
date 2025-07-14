import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-blue-500 text-2xl font-bold">
        NativeWind is working! 🎉
      </Text>
      <View className="mt-4 p-4 bg-green-200 rounded-lg">
        <Text className="text-red-600">
          This green box confirms styling works.
        </Text>
      </View>
    </View>
  );
}
