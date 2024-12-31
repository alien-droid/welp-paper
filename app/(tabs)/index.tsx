import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import SplitWallpaperView from "@/components/SplitWallpaperView";


const Explore = () => {
  const wallpapers = useWallpapers();

  const headerImage = (
    <Image
      source={{
        uri: wallpapers[0]?.url ?? "",
      }}
      style={{ flex: 1 }}
    />
  );
  const headerImageStyle = { dark: "black", light: "white" };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
      <ParallaxScrollView
        headerImage={headerImage}
        headerBackgroundColor={headerImageStyle}
      >
        <SplitWallpaperView wallpapers={wallpapers} />
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Explore;
