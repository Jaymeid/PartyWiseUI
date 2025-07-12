import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

interface RoundedButtonProps {
  backgroundColour: string;
  textColour: string;
  buttonText: string;
  handlePress: () => void;
  disabled?: boolean;
}

export default function RoundedButton({
  backgroundColour,
  textColour,
  buttonText,
  handlePress,
  disabled = false,
}: RoundedButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      className={`${backgroundColour} rounded-3xl items-center justify-center p-2`}
      onPress={handlePress}
    >
      <Text className={`text-2xl font-ibrand ${textColour}`}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
