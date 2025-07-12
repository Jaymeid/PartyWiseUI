import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export default function AddDrinkButton() {
  const handlePress = () => {
    router.push('/(tabs)/(drinks)/addDrink/addDrink');
  };
  return (
    <TouchableOpacity
      className="flex-row bg-[#BB86FC] max-w-36 rounded-xl p-2"
      onPress={handlePress}
    >
      <Text className="font-ibrand text-white text-2xl mr-1">Add Drink</Text>
      <AntDesign name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}
