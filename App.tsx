import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlashList, ListRenderItem} from '@shopify/flash-list'
import { Exercise } from './lib/types/exercise';
import exercises from './assets/data/exercises.json';

export default function App() {

  const renderItem: ListRenderItem<Exercise> = ({ item }) => (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle} | {item.equipment}
      </Text>
    </View>
  )

  

  return (
    <View style={styles.container}>
      <FlashList 
        data={exercises}
        renderItem={renderItem}
        estimatedItemSize={100}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
  
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
    textTransform: 'uppercase',
  },
});