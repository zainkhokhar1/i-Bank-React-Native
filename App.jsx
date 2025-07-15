import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import EnterNumber from "./src/screens/forgot-password/EnterNumber";
import EnterCode from "./src/screens/forgot-password/EnterCode";
import EnterNewPassword from "./src/screens/change-password/EnterNewPassword";
import Success from "./src/screens/change-password/Success";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        style="light"
      />

      {/* <Login /> */}

      {/* <Signup /> */}

      {/* <EnterNumber /> */}

      {/* <EnterCode /> */}

      {/* <EnterNewPassword /> */}

      <Success />

    </View>
  );
}
