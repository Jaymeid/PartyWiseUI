import React, { useEffect } from 'react';

import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ProgressBarProps {
  colour: string;
  progressPercentage: number;
}

export default function ProgressBar({
  colour,
  progressPercentage,
}: ProgressBarProps) {
  const progress = useSharedValue(progressPercentage);

  useEffect(() => {
    const sanitizedProgress = Math.min(progressPercentage, 100);
    progress.value = withTiming(sanitizedProgress, { duration: 200 });
  }, [progressPercentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
  }));

  return (
    <View>
      <View className="h-2 w-full bg-white rounded-2xl" />
      <Animated.View
        className={`absolute h-2 rounded-2xl ${colour}`}
        style={animatedStyle}
      />
    </View>
  );
}
