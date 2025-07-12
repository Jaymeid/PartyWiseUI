import React, { useEffect, useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ButtonGroupSelectorProps {
  options: string[];
  setSelectedOption?: (index: number) => void;
}

function ButtonGroupSelector({
  options,
  setSelectedOption,
}: ButtonGroupSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEM_WIDTH = 100;
  const translateX = useSharedValue(-ITEM_WIDTH);

  useEffect(() => {
    translateX.value = withTiming(-ITEM_WIDTH + activeIndex * ITEM_WIDTH, {
      duration: 200,
    });
  }, [activeIndex, translateX]);

  const animatedHighlightStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="h-7 bg-gray-500 rounded-md items-center justify-center flex-row">
      <Animated.View
        className="absolute h-full bg-gray-200 rounded-md"
        style={[{ width: ITEM_WIDTH }, animatedHighlightStyle]}
      />

      {options.map((item, index) => {
        return (
          <TouchableOpacity
            key={`option-${item}-${index}`}
            className="flex-1 h-6 rounded-md px-2 mx-1 items-center justify-center"
            onPress={() => {
              setActiveIndex(index);
              if (setSelectedOption) {
                setSelectedOption(index);
              }
            }}
          >
            <Text
              className={`text-xl font-ibrand ${activeIndex === index ? 'text-black' : 'text-white'}`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ButtonGroupSelector;
