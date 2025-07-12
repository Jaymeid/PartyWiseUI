import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

interface FilterProps {
  label: string;
  handlePress: () => void;
  active: boolean;
  backgroundColour: string;
}

export default function Filter({
  label,
  handlePress,
  active,
  backgroundColour,
}: FilterProps) {
  return (
    <View className="w-fit">
      <TouchableOpacity
        className="h-10 items-center justify-center rounded-xl flex-row  px-2 border"
        style={{
          backgroundColor: active ? backgroundColour : '',
          borderWidth: 1,
          borderColor: backgroundColour,
        }}
        onPress={handlePress}
      >
        <Text className="text-xl text-white font-ibrand">{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
