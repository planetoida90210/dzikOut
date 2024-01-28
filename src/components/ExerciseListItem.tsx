import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Exercise } from "../types/exercise";
import { ListRenderItem } from "@shopify/flash-list";

//Styles
const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  exerciseSubtitle: {
    fontSize: 16,
  },
  subValue: {
    textTransform: "capitalize",
  },
});

type ExerciseListItemProps = {
  item: Exercise;
};

export const ExerciseListItem = ({ item }: ExerciseListItemProps) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>Partia: {item.muscle}</Text> | {""}
        <Text style={styles.subValue}>Sprzęt: {item.equipment}</Text>
      </Text>
    </View>
  );
};
//Render to FlashList
const renderItem: ListRenderItem<Exercise> = ({ item }) => (
  <ExerciseListItem item={item} />
);

export { renderItem };
