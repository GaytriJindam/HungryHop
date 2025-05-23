import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react'; // Add this line

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Hungry Hop' }} />
      <View style={styles.container}>
        <Link href="/(tabs)/Index" style={styles.button}>
          Go to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
