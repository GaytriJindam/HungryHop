import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined; 
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const LogoutScreen = () => {
  const navigation = useNavigation<NavigationProp>();

    // Show the logout alert
    Alert.alert('Logged Out', 'You have been logged out successfully.');
  

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Logging out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default LogoutScreen;

