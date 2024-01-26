import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0]
  console.log(exercise)
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <View style={styles.exerciseDetails}>
          <Text style={styles.exerciseSubtitle}>{exercise.muscle} | {exercise.equipment}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  exerciseDetails: {
    alignItems: 'center', 
    paddingTop: 5, 
  },
  exerciseName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    textTransform: 'capitalize',
    color: 'dimgray',
  }
});