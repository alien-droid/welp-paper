import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";

const ViewPicture = () => {
  const sheetRef = useRef(null);

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Text>Awesome 🎉</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 450,
  },
});

export default ViewPicture;
