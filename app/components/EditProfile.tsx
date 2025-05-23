import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';
import { FontAwesome } from '@expo/vector-icons';  // Import FontAwesome for icons

export default function EditProfileScreen() {
  // State variables for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null); // Fix here

  // Request permission to access the camera and gallery
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Camera access is required to upload a profile picture');
    }
  };

  // Handle image picking from the camera or gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri); // Set the selected image URI
    }
  };

  // Fetch the geolocation of the user and set the address
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location access is required to fetch address');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const geocode = await Location.reverseGeocodeAsync(location.coords);
    const { city, region, country } = geocode[0];
    setAddress(`${city}, ${region}, ${country}`);
  };

  // Convert the image URI to base64 (so it can be stored in JSON)
  const convertImageToBase64 = async (uri: string) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return base64;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return null;
    }
  };

  // Handle form submission and create JSON object with profile data
  const handleSubmit = async () => {
    // Convert image to base64 if available
    let imageBase64 = null;
    if (profilePicture) {
      imageBase64 = await convertImageToBase64(profilePicture);
    }

    const profileData = {
      name,
      email,
      phoneNumber,
      address,
      profilePicture: imageBase64, // Store the base64 image data
    };

    Alert.alert('Profile Updated', 'Your profile has been successfully updated!');

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setProfilePicture(null); // Clear profile picture
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <Text>No Profile Picture</Text>
        )}
        {/* Custom Button for "Choose a photo" */}
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Choose a photo</Text>
        </TouchableOpacity>
      </View>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {/* Address Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        multiline
      />

      {/* Get Address from Geolocation Button with Map Icon */}
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <FontAwesome name="map" size={24} color="#fff" />
        <Text style={styles.buttonText}> Geolocation</Text>
      </TouchableOpacity>

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#FF5F1F',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8, 
    fontSize: 16,
  },
});
