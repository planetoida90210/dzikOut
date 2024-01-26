import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0]
  console.log(exercise)
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}> Partia: {exercise.muscle} | Sprzęt: {exercise.equipment}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: '500'
  }, 
  exerciseSubtitle: {
    paddingTop: 10,
    color: 'dimgray',
    textAlign: 'center',
  }
});
