import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import exercises from "@/assets/data/exercises.json";
import { Exercise } from "@/types/exercise";
import { Stack } from "expo-router";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default function exercisePage() {
  const { id } = useLocalSearchParams();
  const exercise = exercises.find(
    (item: Exercise) => item.id.toString() === id
  );

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text>Ćwiczenie nie zostało znalezione.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{exercise.equipment}</Text>
      </Text>
      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </View>
  );
}