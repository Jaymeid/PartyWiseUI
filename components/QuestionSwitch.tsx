import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface QuestionSwitchProps {
  negativeActionClickHandler: () => void;
  positiveActionClickHandler: () => void;
  negativeLabel: string;
  positiveLabel: string;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

function QuestionSwitch({
  negativeActionClickHandler,
  positiveActionClickHandler,
  negativeLabel,
  positiveLabel,
}: QuestionSwitchProps) {
  const cancelPressed = useSharedValue(0);
  const addPressed = useSharedValue(0);

  const cancelStyle = useAnimatedStyle(() => ({
    backgroundColor: cancelPressed.value
      ? withTiming('#ff2c2c', { duration: 150 })
      : withTiming('rgba(0,0,0,0)', { duration: 150 }),
  }));

  const addStyle = useAnimatedStyle(() => ({
    backgroundColor: addPressed.value
      ? withTiming('#4ade80', { duration: 150 })
      : withTiming('rgba(0,0,0,0)', { duration: 150 }),
  }));

  return (
    <View className="flex flex-row">
      <AnimatedTouchableOpacity
        className="flex-1 items-center border-r border-gray-300 py-3"
        style={cancelStyle}
        onPressIn={() => (cancelPressed.value = 1)}
        onPressOut={() => (cancelPressed.value = 0)}
        onPress={negativeActionClickHandler}
      >
        <Text className="text-white text-2xl font-ibrand min-w-50">
          {negativeLabel}
        </Text>
      </AnimatedTouchableOpacity>

      <AnimatedTouchableOpacity
        className="flex-1 items-center border-l border-gray-300 py-3"
        style={addStyle}
        onPressIn={() => (addPressed.value = 1)}
        onPressOut={() => (addPressed.value = 0)}
        onPress={positiveActionClickHandler}
      >
        <Text className="text-green-400 font-bold font-ibrand text-2xl min-w-50">
          {positiveLabel}
        </Text>
      </AnimatedTouchableOpacity>
    </View>
  );
}

export default QuestionSwitch;
