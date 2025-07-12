import React, { useEffect, useState } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Hr from './Hr';

interface AccordionProps {
  label: string;
  children: React.ReactNode;
  isDefaultOpen: boolean;
}

export default function Accordion({
  label,
  children,
  isDefaultOpen,
}: AccordionProps) {
  const isOpenRef = React.useRef(isDefaultOpen);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const contentHeight = useSharedValue(0);
  const iconRotation = useSharedValue(0);
  const animationDuration = 200;

  const animatedStyle = useAnimatedStyle(() => ({
    height: contentHeight.value,
    overflow: 'hidden',
  }));

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${iconRotation.value}deg` }],
  }));

  useEffect(() => {
    if (isDefaultOpen && measuredHeight > 0) {
      contentHeight.value = measuredHeight;
      iconRotation.value = 180;
    }
  }, [measuredHeight]);

  function handleTogglePress() {
    const next = !isOpenRef.current;
    isOpenRef.current = next;

    contentHeight.value = withTiming(next ? measuredHeight : 0, {
      duration: animationDuration,
    });
    iconRotation.value = withTiming(next ? 180 : 0, {
      duration: animationDuration,
    });
  }

  return (
    <View className="w-full">
      <View className="px-4">
        <TouchableOpacity
          className="flex-row justify-between"
          onPress={handleTogglePress}
        >
          <Text className="text-white text-xl font-ibrand">{label}</Text>
          <Animated.View style={iconAnimatedStyle}>
            <FontAwesome name="chevron-circle-down" size={20} color="white" />
          </Animated.View>
        </TouchableOpacity>

        {/* This is the invisible measuring wrapper used to calculate view height */}
        <View
          className="absolute left-0 right-0 opacity-0"
          onLayout={(event) => {
            setMeasuredHeight(event.nativeEvent.layout.height);
          }}
          pointerEvents="none"
        >
          {children}
        </View>

        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </View>

      <Hr />
    </View>
  );
}
