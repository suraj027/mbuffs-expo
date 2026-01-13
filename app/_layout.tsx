import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide the Stack header, let NativeTabs handle navigation
      }}
    />
  );
}
