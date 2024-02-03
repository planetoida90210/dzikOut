import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { FlashList } from '@shopify/flash-list';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

import { renderItem } from '@/components/ExerciseListItem';
import client from '@/graphqlClient';

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises'],
    queryFn: () => client.request(exerciseQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <View>Failed to fetch exercise</View>;
  }

  return (
    <View style={styles.container}>
      <FlashList
        // @ts-ignore
        data={data?.exercises}
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
    justifyContent: 'center',
    padding: 10,
  },
});
