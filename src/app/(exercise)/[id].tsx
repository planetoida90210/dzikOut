import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

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
    lineHeight: 20,
  },
  seeMore: {
    alignSelf: "center",
    padding: 10,
    fontWeight: "600",
    color: "gray",
  },
});

export default function exercisePage() {
  const { id } = useLocalSearchParams();
  const [isInstructionsExpanded, setIsInstructionsExpanded] =
    useState<boolean>(false);
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
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text
          numberOfLines={isInstructionsExpanded ? 0 : 4}
          style={styles.instructions}
        >
          {exercise.instructions}
        </Text>
        <Text
          onPress={() => setIsInstructionsExpanded(!isInstructionsExpanded)}
          style={styles.seeMore}
        >
          {isInstructionsExpanded ? "Zwiń" : "Więcej"}
        </Text>
      </View>
    </ScrollView>
  );
}
