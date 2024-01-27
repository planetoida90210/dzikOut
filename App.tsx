import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FlashList} from '@shopify/flash-list'
import exercises from './assets/data/exercises.json';
import { renderItem } from './src/components/ExerciseListItem';

export default function App() {


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
});