import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useRouter } from 'expo-router';


type RootStackParamList = {
    Menu: undefined;
  };
  
  type NavigationProp = StackNavigationProp<RootStackParamList>;
  
  
export default function Login() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const handleSendOtp = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return;
    }
    
    // Simulate sending OTP
    setOtpSent(true);
    Alert.alert('OTP Sent', `OTP has been sent to ${phoneNumber}.`);

    setTimeout(() => {
        Alert.alert('OTP Validated', `Registered successfully, Welcome to Hungry Hop`);
         router.push('./Menu');
    }, 2000);


  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Enter your mobile number to receive an OTP</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter mobile number"
        keyboardType="numeric"
        maxLength={10}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
        <Text style={styles.buttonText}>{otpSent ? 'Resend OTP' : 'Send OTP'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
