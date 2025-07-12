import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ToggleProps {
  handleFirstOptionPress: () => void;
  handleSecondOptionPress: () => void;
}

export default function Toggle({
  handleFirstOptionPress,
  handleSecondOptionPress,
}: ToggleProps) {
  const translateX = useSharedValue(0);
  const [selectedOption, setSelectedOption] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleFirstPress = () => {
    translateX.value = withTiming(0, { duration: 200 });
    setSelectedOption(0);
    handleFirstOptionPress();
  };

  const handleSecondPress = () => {
    translateX.value = withTiming(34, { duration: 200 });
    setSelectedOption(1);
    handleSecondOptionPress();
  };

  return (
    <View className="bg-gray-500 rounded-lg h-8 w-20">
      <Animated.View
        className="bg-white h-full w-[50%] absolute rounded-lg"
        style={animatedStyle}
      />
      <View className="flex-row px-2 justify-evenly gap-2 text-center">
        <TouchableOpacity onPress={handleFirstPress}>
          <Text
            className={`text-black text-center text-2xl font-ibrand mr-2 ${selectedOption === 0 ? 'text-black' : 'text-white'}`}
          >
            kg
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSecondPress}>
          <Text
            className={`text-black text-2xl font-ibrand mr-2 ${selectedOption === 1 ? 'text-black' : 'text-white'}`}
          >
            lb
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
