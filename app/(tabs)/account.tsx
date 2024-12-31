import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, useColorScheme, View, Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={["right", "top", "left"]}
    >
      <ThemedView style={{ padding: 10 }}>
        <ThemedText style={{ fontSize: 25, fontWeight: "600" }}>
          Welp-Papers
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingTop: 10,
          }}
        >
          Sign In to Save your favorite wallpapers
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ flex: 1, padding: 10 }}>
        <Buttons />
        <Settings />
      </ThemedView>
    </SafeAreaView>
  );
};

const Buttons = () => {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        padding: 20,
        alignItems: "center",
      }}
    >
      <AuthButton label="Sign In" icon="logo-google" />
      <AuthButton label="Sign In" icon="logo-apple" />
    </ThemedView>
  );
};

const Settings = () => {
  const theme = useColorScheme();
  return (
    <ThemedView style={{ paddingTop: 40, alignContent: "center" }}>
      <ThemedText style={{ fontSize: 25, fontWeight: "600" }}>
        Settings
      </ThemedText>
      <ThemedText
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginTop: 10,
        }}
      >
        Theme
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 10,
          marginTop: 10,
          marginHorizontal: 30,
        }}
      >
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: theme === "dark" ? "white" : "black",
            borderRadius: 10,
            padding: 5,
          }}
          onPress={() => Appearance.setColorScheme("dark")}
        >
          <ThemedText style={{ textAlign: "center" }}>Dark</ThemedText>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: theme === "dark" ? "white" : "black",
            borderRadius: 10,
            padding: 5,
          }}
          onPress={() => Appearance.setColorScheme("light")}
        >
          <ThemedText style={{ textAlign: "center" }}>Light</ThemedText>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: theme === "dark" ? "white" : "black",
            borderRadius: 10,
            padding: 5,
          }}
          onPress={() => Appearance.setColorScheme(null)}
        >
          <ThemedText style={{ textAlign: "center" }}>System</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
};

interface AuthButtonProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
}

const AuthButton = ({ icon = "wifi", label }: AuthButtonProps) => {
  const theme = useColorScheme();
  return (
    <Pressable
      style={{
        padding: 6,
        borderRadius: 15,
        backgroundColor: theme === "dark" ? "white" : "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        borderColor: theme === "dark" ? "white" : "black",
        borderWidth: 1,
      }}
    >
      <Ionicons
        name={icon}
        size={20}
        color={theme === "dark" ? "black" : "white"}
      />
      <ThemedText
        style={{
          paddingLeft: 10,
          color: theme === "dark" ? "black" : "white",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {label}
      </ThemedText>
    </Pressable>
  );
};

export default Account;
