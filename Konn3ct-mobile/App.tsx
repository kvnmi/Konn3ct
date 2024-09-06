import React, { useEffect } from "react";

import PreJoiningScreen from "./app/screens/PreJoiningScreen";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import colors from "./app/config/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PreJoiningScreen />
      <StatusBar backgroundColor={colors.black} style="light" />
    </SafeAreaProvider>
  );
}
