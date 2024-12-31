import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../home/Library";
import Liked from "../home/Liked";
import Suggested from "../home/Suggested";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

const home = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
      <Tab.Navigator
        style={{ flex: 1 }}
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors[theme].background },
          tabBarActiveTintColor: Colors[theme].tint,
        }}
      >
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default home;
