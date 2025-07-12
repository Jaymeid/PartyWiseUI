import React, { useState, useRef } from 'react';

import { View, Text, FlatList, ViewToken } from 'react-native';
import * as Animatable from 'react-native-animatable';

import ArticleThumbnail from './ArticleThumbnail';

import { Article } from '@/types/Article';

const zoomIn: Animatable.CustomAnimation = {
  0: {
    transform: [{ scale: 0.9 }],
  },
  1: {
    transform: [{ scale: 1 }],
  },
};

const zoomOut: Animatable.CustomAnimation = {
  0: {
    transform: [{ scale: 1 }],
  },
  1: {
    transform: [{ scale: 0.9 }],
  },
};

interface ViewableItemsChangedProps {
  viewableItems: ViewToken<Article>[];
  changed?: ViewToken<Article>[];
}

interface ArticleCategoryProps {
  categoryTitle: string;
  data: Article[];
}

export default function ArticleCategory({
  categoryTitle,
  data,
}: ArticleCategoryProps) {
  const [activeItem, setActiveItem] = useState(data[0]);
  const hasAnimatedOnce = useRef(false);

  const viewableItemsChanged = ({
    viewableItems,
  }: ViewableItemsChangedProps) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item);
      hasAnimatedOnce.current = true;
    }
  };

  return (
    <View className="pl-2">
      <Text className="text-2xl font-ibrand text-white">{categoryTitle}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => String(item.id)}
        onViewableItemsChanged={viewableItemsChanged}
        contentContainerStyle={{ paddingRight: 250 }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        renderItem={({ item }) => {
          const isActive = activeItem.id === item.id;
          return (
            <Animatable.View
              animation={
                hasAnimatedOnce.current
                  ? isActive
                    ? zoomIn
                    : zoomOut
                  : undefined
              }
              duration={300}
              className="px-2"
              useNativeDriver
              style={{
                transform: [{ scale: hasAnimatedOnce.current ? 1 : 0.9 }],
              }}
            >
              <ArticleThumbnail title={item.title} />
            </Animatable.View>
          );
        }}
      />
    </View>
  );
}
