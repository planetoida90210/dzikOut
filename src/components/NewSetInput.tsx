import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const NewSetInput = () => {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const addSet = () => {
    console.log({ reps, weight });
    //set data to database
    setReps('');
    setWeight('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

export default NewSetInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
});
