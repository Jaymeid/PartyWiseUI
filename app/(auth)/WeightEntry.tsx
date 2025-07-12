import React, { useState } from 'react';

import { router } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormField from '@/components/FormField';
import RoundedButton from '@/components/RoundedButton';
import Toggle from '@/components/Toggle';

export default function WeightEntry() {
  const [isSkipSelected, setIsSkipSelected] = useState(false);
  const [weight, setWeight] = useState<string | undefined>(undefined);
  const [useMetric, setUseMetric] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSkipPress = () => {
    setIsSkipSelected(true);
    handleNextPress();
  };

  const handleWeightChange = (text: string) => {
    if (!text) {
      setWeight('');
      setIsButtonDisabled(true);
    } else if (/^\d*$/.test(text)) {
      setWeight(text);
      setIsButtonDisabled(false);
    }
  };

  const clearForm = () => {
    setWeight(undefined);
    setIsButtonDisabled(true);
    setIsSkipSelected(false);
  };

  const handleNextPress = () => {
    router.replace('/(auth)/Success');
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-background justify-center">
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={50}
      >
        <View className="items-center px-2">
          <Text className="font-ibrand text-white text-3xl text-center mb-4">
            What weight should we use for BAC estimations?
          </Text>
          <View className="items-end w-full pr-2 mb-2">
            <Toggle
              handleFirstOptionPress={() => {
                setUseMetric(true);
                clearForm();
              }}
              handleSecondOptionPress={() => {
                setUseMetric(false);
                clearForm();
              }}
            />
          </View>
          <FormField
            value={weight}
            otherStyles="bg-[#32264b]"
            annotation={useMetric ? 'kg' : 'lb'}
            keyboardType="number-pad"
            handleChangeText={handleWeightChange}
            returnKeyType="done"
          />
          <TouchableOpacity
            onPress={handleSkipPress}
            className={`p-4 mt-4 border-4 w-full items-center rounded-xl ${isSkipSelected ? 'border-[#5318d4]' : 'border-gray-400'}`}
          >
            <Text className="text-white font-ibrand text-2xl">
              Skip this question
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
