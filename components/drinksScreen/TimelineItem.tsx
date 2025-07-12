import React from 'react';

import { View, Text } from 'react-native';

interface TimelineItemProps {
  title: string;
  Icon: React.ComponentType<{ width: number; height: number }>;
  timeConsumed: string;
  lastEntry?: boolean;
}

export default function TimelineItem({
  title,
  Icon,
  timeConsumed,
  lastEntry = false,
}: TimelineItemProps) {
  return (
    <View>
      <View className="flex-row items-center gap-2">
        <View className="items-center">
          <Icon width={36} height={36} />
        </View>
        <View>
          <Text className="text-xl text-white font-ibrand">{title}</Text>
          <Text className="text-l text-gray-400 font-ibrand">
            {timeConsumed}
          </Text>
        </View>
      </View>
      {!lastEntry && (
        <View className="w-10 items-center">
          <View className="w-1 bg-gray-600 h-10" />
        </View>
      )}
    </View>
  );
}
