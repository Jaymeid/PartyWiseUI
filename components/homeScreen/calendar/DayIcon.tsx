import React from 'react';

import { View, Text } from 'react-native';

import { DrinkStatus } from '@/types/DrinkStatus';

interface DayIconProps {
  date: number;
  index: number;
  drinkState: DrinkStatus;
  isToday: boolean;
  showLabels: boolean;
}

const weekDayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const bgColourMap = new Map([
  ['sober', ''],
  ['drank', 'bg-[#C1A5D8]'],
  ['hungover', 'bg-[#7A6D8C]'],
]);

function DayIcon({
  date,
  index,
  drinkState,
  isToday,
  showLabels,
}: DayIconProps) {
  return (
    <View className="flex items-center justify-center text-center">
      {showLabels && (
        <Text className="text-sm text-gray-300 font-ibrand">
          {isToday ? 'Today' : weekDayLabels[index]}
        </Text>
      )}
      <View
        className={`w-10 h-10 rounded-full justify-center items-center ${bgColourMap.get(drinkState)} ${isToday && 'border-white border-[2px]'}`}
      >
        <Text className="text-xl font-ibrand pt-1 text-white">{date}</Text>
      </View>
    </View>
  );
}

export default DayIcon;
