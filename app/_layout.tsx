import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, StatusBar, useColorScheme } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const layout = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={Colors[theme].background}
      />
      <GestureHandlerRootView
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: Colors[theme].background,
        }}
      >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="(other)/accountinfo"
              options={{
                headerShown: true,
                headerTitle: "Account Info",
                headerBackTitle: "",
              }}
            />
          </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default layout;
