import React from 'react';

import { View, Image, Text } from 'react-native';

import imagePlaceholder from '../../assets/images/image_placeholder.png';

interface AchievementProps {
  title: string;
  dateAchieved: Date;
  unlocked: boolean;
}

export default function Achievement({
  title,
  dateAchieved,
  unlocked,
}: AchievementProps) {
  return (
    <View className="flex-col justify-center items-center">
      <Image
        source={imagePlaceholder}
        className="w-20 h-20 bg-gray-100 rounded-full"
      />
      <View className="max-w-24 mt-2">
        <Text className="text-l text-white font-ibrand text-center">
          {title}
        </Text>
      </View>
      {unlocked && (
        <Text className="text-gray-400 text-xs">
          {dateAchieved.toLocaleDateString('en-GB')}
        </Text>
      )}
    </View>
  );
}
