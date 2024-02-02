import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { FlashList } from '@shopify/flash-list';
import { gql, request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

import { renderItem } from '@/components/ExerciseListItem';

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
    }
  }
`;

const url = 'https://saojose.stepzen.net/api/maudlin-oyster/__graphql';

export default function ExercisesScreen() {
  const { data, isLoading } = useQuery({
    queryKey: ['exercises'],
    queryFn: () => {
      return request({
        url,
        document: exerciseQuery,
        requestHeaders: {
          authorization:
            'apikey saojose::stepzen.io+1000::32ca49442c62cd1d0641452cc15ba01130a0c3878fb4b7d39c6433956b7d8d4d',
        },
      });
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <FlashList
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
