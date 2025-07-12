import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import {
  Image,
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

interface SearchResultProps {
  articleTitle: string;
  image: ImageSourcePropType;
}

export default function SearchResult({
  articleTitle,
  image,
}: SearchResultProps) {
  const handlePress = () => {
    router.push('/(tabs)/(knowledgeBase)/article/article');
  };
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center"
      onPress={handlePress}
    >
      <View className="flex-row items-center">
        <Image source={image} />
        <Text className="text-xl text-white font-ibrand flex-shrink line-clamp-1 max-w-64">
          {articleTitle}
        </Text>
      </View>
      <AntDesign name="right" size={24} color="white" />
    </TouchableOpacity>
  );
}
