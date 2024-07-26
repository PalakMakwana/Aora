import { StatusBar } from 'expo-status-bar';
import React from 'react';
 import { Text, View } from 'react-native';

export default function App() {
  return (
   <View className="flex-1 justify-center items-center bg-black h-full">
      <Text className="text-white text-center text-3xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
