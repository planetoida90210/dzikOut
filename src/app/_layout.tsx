import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(exercise)/[id]" options={{ title: "Ćwiczenie" }} />
    </Stack>
  );
}
