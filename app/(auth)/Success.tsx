import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RoundedButton from '@/components/RoundedButton';

export default function Success() {
  return (
    <SafeAreaView className="h-full bg-background flex-1 justify-center">
      <View className="items-center px-2">
        <Text className="font-ibrand text-white text-3xl text-center mb-2">
          You're all set!
        </Text>
        <AntDesign name="checkcircleo" size={240} color="green" />
        <Text className="font-ibrand text-white text-2xl text-center mt-2">
          You can edit this information any time in the user settings
        </Text>
      </View>

      <View className="w-full absolute bottom-10 px-5">
        <RoundedButton
          backgroundColour="bg-[#5318d4]"
          textColour={'text-white'}
          buttonText={'Continue to app'}
          handlePress={() => router.replace('/(tabs)')}
        />
      </View>
    </SafeAreaView>
  );
}
