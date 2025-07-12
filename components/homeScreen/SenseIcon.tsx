import React from 'react';

import * as Haptics from 'expo-haptics';
import { GestureResponderEvent, Image, TouchableOpacity } from 'react-native';

import imagePlaceholder from '../../assets/images/image_placeholder.png';

interface SenseIconProps {
  index: number;
  activeIndex: number;
  onPress: (event: GestureResponderEvent) => void;
}

function SenseIcon({ index, activeIndex, onPress }: SenseIconProps) {
  const handlePress = (event: GestureResponderEvent) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onPress(event);
  };

  return (
    <TouchableOpacity className="justify-between w-auto" onPress={handlePress}>
      <Image
        className={`w-20 h-20 bg-gray-100 rounded-full ${index === activeIndex ? 'border-primary border-[5px]' : ''}`}
        source={imagePlaceholder}
      />
    </TouchableOpacity>
  );
}

export default SenseIcon;
