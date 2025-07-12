import React from 'react';

import { FlatList, Text, View } from 'react-native';

import ArticleThumbnail from './ArticleThumbnail';

import { Article } from '@/types/Article';

interface ArticleCategoryProps {
  categoryTitle: string;
  data: Article[];
}

export default function SpotlightCategory({
  categoryTitle,
  data,
}: ArticleCategoryProps) {
  return (
    <View>
      <View className="items-center">
        <Text className="text-3xl font-ibrand text-white">{categoryTitle}</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <View className="px-3">
              <ArticleThumbnail title={item.title} height={200} />
            </View>
          );
        }}
      />
    </View>
  );
}
