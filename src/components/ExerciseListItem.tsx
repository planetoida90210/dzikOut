import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Exercise } from "../types/exercise";
import { ListRenderItem } from "@shopify/flash-list";

//Styles
const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "ghostwhite",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 2,
    // Shadow

    shadowColor: "#484848",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
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
    <TouchableOpacity>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>Partia: {item.muscle}</Text> | {""}
          <Text style={styles.subValue}>Sprzęt: {item.equipment}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
//Render to FlashList
const renderItem: ListRenderItem<Exercise> = ({ item }) => (
  <ExerciseListItem item={item} />
);

export { renderItem };
