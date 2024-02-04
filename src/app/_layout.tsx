import { Stack } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack>
        <Stack.Screen
          name="(exercise)/[name]"
          options={{ title: 'Ćwiczenie' }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
