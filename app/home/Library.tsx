import SplitWallpaperView from "@/components/SplitWallpaperView";
import { ThemedView } from "@/components/ThemedView";
import { useLibraryWallpapers } from "@/hooks/useWallpapers";
import { View, Text } from "react-native";

const Library = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <SplitWallpaperView wallpapers={useLibraryWallpapers()} />
    </ThemedView>
  );
};

export default Library;
