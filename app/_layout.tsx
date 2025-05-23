import { Stack, Tabs } from 'expo-router'; // Import Tabs for footer
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // For tab icons

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

      <StatusBar style="light" />
    </>
  );
}
