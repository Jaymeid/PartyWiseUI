import React from 'react';

import { router } from 'expo-router';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import imagePlaceholder from '../../assets/images/image_placeholder.png';

interface ArticleThumbnailProps {
  title: string;
  height?: number;
}

export default function ArticleThumbnail({
  title,
  height = 160,
}: ArticleThumbnailProps) {
  const handlePress = () => {
    router.push('/(tabs)/(knowledgeBase)/article/article');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={imagePlaceholder}
        className="relative aspect-[10/14] bg-red-300 rounded-lg"
        style={{ height }} // Tailwind doesn't like dynamic styles so need to use style prop here
      />
      <View className=" absolute bottom-4 pl-2">
        <Text className="font-ibrand text-2xl text-white">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
