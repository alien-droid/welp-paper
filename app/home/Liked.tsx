import SplitWallpaperView from "@/components/SplitWallpaperView";
import { ThemedView } from "@/components/ThemedView";
import { useLikedWallpapers } from "@/hooks/useWallpapers";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Liked = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <SplitWallpaperView wallpapers={useLikedWallpapers()} />
    </ThemedView>
  );
};

export default Liked;
