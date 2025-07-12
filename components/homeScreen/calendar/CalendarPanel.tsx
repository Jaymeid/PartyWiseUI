import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import MonthCalendar from './MonthCalendar';
import WeekCalendar from './WeekCalendar';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function CalendarPanel() {
  const today = new Date();
  const [isMonthView, setIsMonthView] = useState(false);
  const rotation = useSharedValue(0);
  const viewHeight = useSharedValue(128);
  const viewAnimatedStyle = useAnimatedStyle(() => ({
    height: withTiming(viewHeight.value, { duration: 250 }),
  }));
  const [dateLabel, setDateLabel] = useState(
    `${monthNames[today.getMonth()]} ${today.getFullYear()}`,
  );

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const handleExpandPress = () => {
    const targetRotation = isMonthView ? 0 : 180;
    rotation.value = withTiming(targetRotation, { duration: 250 });

    const targetHeight = isMonthView ? 128 : 275;
    viewHeight.value = withTiming(targetHeight, { duration: 250 });

    setIsMonthView(!isMonthView);
  };

  return (
    <Animated.View className="w-full pb-2 relative" style={viewAnimatedStyle}>
      <View className="w-screen items-center pb-2 relative">
        <Text className="font-ibrand text-white text-center">{dateLabel}</Text>
      </View>

      {isMonthView ? (
        <MonthCalendar setDateLabel={setDateLabel} />
      ) : (
        <WeekCalendar setDateLabel={setDateLabel} />
      )}

      <View className="absolute bottom-0 w-full flex-row justify-end px-6 pb-4">
        <TouchableOpacity onPress={handleExpandPress}>
          <Animated.View style={iconAnimatedStyle}>
            <AntDesign name="down" size={24} color="white" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default CalendarPanel;
