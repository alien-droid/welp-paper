import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme, View } from "react-native";
const layout = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="foryou"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default layout;
