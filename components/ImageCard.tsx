import { Wallpaper } from "@/hooks/useWallpapers";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

export const ImageCard = ({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
          <Ionicons name="heart" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 220,
    flex: 1,
    borderRadius: 15,
  },
  label: {
    color: "white",
    textAlign: "center",
  },
  labelContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
