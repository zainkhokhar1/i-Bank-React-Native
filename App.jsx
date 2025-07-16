import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import StackNavigator from "./src/navigation/StackNavigator";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useEffect, useState } from "react";


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    })();

  }, []);

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 font-sans">
      <StatusBar
        style="light"
      />

      <StackNavigator />

    </View>
  );
}
