import React, { useState } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RoundedButton from '@/components/RoundedButton';

enum GenderEnum {
  'male',
  'female',
  'neither',
}
export default function GenderSelectPage() {
  const [selectedGender, setSelectedGender] = useState<GenderEnum | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleNextPress = () => {
    router.navigate('/(auth)/WeightEntry');
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-background justify-center">
      <View className="items-center px-2">
        <Text className="font-ibrand text-white text-3xl text-center mb-4">
          What sex should we use for BAC estimations?
        </Text>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => {
              setSelectedGender(0);
              setIsButtonDisabled(false);
            }}
            className={`border-4 px-16 py-8 rounded-xl ${selectedGender === 0 ? 'border-[#5318d4]' : 'border-gray-400'}`}
          >
            <FontAwesome5 name="male" size={240} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender(1);
              setIsButtonDisabled(false);
            }}
            className={`border-4 px-12 py-8 rounded-xl ${selectedGender === 1 ? 'border-[#5318d4]' : 'border-gray-400'}`}
          >
            <FontAwesome5 name="female" size={240} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setSelectedGender(2);
            setIsButtonDisabled(false);
          }}
          className={`p-4 border-4 w-full items-center rounded-xl mt-2 ${selectedGender === 2 ? 'border-[#5318d4]' : 'border-gray-400'}`}
        >
          <Text className="text-white font-ibrand text-2xl">
            Skip this question
          </Text>
        </TouchableOpacity>
        {selectedGender === 2 && (
          <Text className="text-white font-ibrand text-l text-center mt-2">
            We know "male" or "female" doesn't fit everyone. Just so you know,
            skipping this may make BAC estimates less accurate.
          </Text>
        )}
      </View>

      <View className="w-full absolute bottom-10 px-5">
        <RoundedButton
          backgroundColour={isButtonDisabled ? 'bg-gray-700' : 'bg-[#5318d4]'}
          disabled={isButtonDisabled}
          textColour={'text-white'}
          buttonText={'Next'}
          handlePress={handleNextPress}
        />
      </View>
    </SafeAreaView>
  );
}
