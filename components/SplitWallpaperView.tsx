import { Wallpaper } from "@/hooks/useWallpapers";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import { ThemedView } from "./ThemedView";
import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { ImageCard } from "./ImageCard";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const SplitWallpaperView = ({ wallpapers }: { wallpapers: Wallpaper[] }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["98%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderWallpaperItem = ({ item }: { item: Wallpaper }) => (
    <View style={styles.imgContainer}>
      <ImageCard
        key={item.name}
        wallpaper={item}
        onPress={() => handleWallpaperPress(item)}
      />
    </View>
  );

  const handleWallpaperPress = (wallpaper: Wallpaper) => {
    setSelectedWallpaper(wallpaper);
    bottomSheetRef.current?.expand();
  };

  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            data={wallpapers}
            keyExtractor={(item) => item.name}
            renderItem={renderWallpaperItem}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ display: "none" }}
        onClose={() => setSelectedWallpaper(null)}
        handleStyle={{ display: "none" }}
        style={{ zIndex: 10 }}
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop
            {...backdropProps}
            disappearsOnIndex={0}
            appearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView style={{ flex: 1 }}>
          {selectedWallpaper && (
            <ThemedView style={{ flex: 1 }}>
              <Image
                source={{ uri: selectedWallpaper.url }}
                style={{ height: "80%", borderRadius: 15 }}
              ></Image>
              <View style={styles.topBar}>
                <Ionicons
                  name="close"
                  size={20}
                  color="white"
                  onPress={() => bottomSheetRef.current?.close()}
                />
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Ionicons name="heart" size={20} color="white" />
                  <Ionicons
                    name="share"
                    size={20}
                    color="white"
                    style={{ paddingLeft: 5 }}
                    onPress={() => shareWallpaper(selectedWallpaper)}
                  />
                </View>
              </View>
              <ThemedView style={{ width: "100%" }}>
                <ThemedText
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 30,
                    paddingTop: 15,
                  }}
                >
                  {selectedWallpaper.name}
                </ThemedText>
                <CustomDownloadButton selectedWallpaper={selectedWallpaper} />
              </ThemedView>
            </ThemedView>
          )}
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const shareWallpaper = async (selectedWallpaper: Wallpaper) => {
  let date = new Date().getTime();
  let fileUri = FileSystem.documentDirectory + `/${selectedWallpaper.name}-${date}.jpg`;
  try {
    const res = await FileSystem.downloadAsync(selectedWallpaper.url, fileUri);
    const result = await Sharing.isAvailableAsync();
    if (result) {
      await Sharing.shareAsync(res.uri);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleDownload = async (selectedWallpaper: Wallpaper) => {
  let date = new Date().getTime();
  let fileUri = FileSystem.documentDirectory + `/${selectedWallpaper.name}-${date}.jpg`;
  try {
    const res = await FileSystem.downloadAsync(selectedWallpaper.url, fileUri);
    saveFile(res.uri);
  } catch (error) {
    console.log(error);
  }
};

const saveFile = async (uri: string) => {
  try {
    const res = await MediaLibrary.requestPermissionsAsync(true);
    if (res.granted) {
      const res = await MediaLibrary.createAssetAsync(uri);
      console.log(res);
    }
    else {
      console.log("permission denied");
    }
  } catch (error) {
    console.log("unable to save file");
  }
}

const CustomDownloadButton = ({ selectedWallpaper }: { selectedWallpaper: Wallpaper }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        padding: 15,
        borderRadius: 15,
        backgroundColor: Colors[theme].background,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
        borderWidth: 1,
        borderColor: theme === "dark" ? "white" : "black",
        width: "60%",
        alignSelf: "center",
      }}
      onPress={() => handleDownload(selectedWallpaper)}
    >
      <Ionicons
        name="download"
        size={20}
        color={theme === "dark" ? "white" : "black"}
      />
      <ThemedText
        style={{
          paddingLeft: 5,
          color: theme === "dark" ? "white" : "black",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        Download
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 5,
  },
  imgContainer: {
    flex: 1,
    paddingVertical: 10,
    margin: 5,
  },
  topBar: {
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
});

export default SplitWallpaperView;