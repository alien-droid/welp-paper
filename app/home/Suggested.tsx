import SplitWallpaperView from "@/components/SplitWallpaperView";
import { ThemedView } from "@/components/ThemedView";
import { useSuggestedWallpapers } from "@/hooks/useWallpapers";
import { View } from "react-native";

const Suggested = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <SplitWallpaperView wallpapers={useSuggestedWallpapers()} />
    </ThemedView>
  );
};

export default Suggested;
