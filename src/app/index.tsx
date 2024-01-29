import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import exercises from "@/assets/data/exercises.json";
import { renderItem } from "@/components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlashList
        data={exercises}
        renderItem={renderItem}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
