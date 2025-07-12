import React, { useState } from 'react';

import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterSelector from '@/components/FilterSelector';
import ArticleCategory from '@/components/knowledgeBaseScreen/ArticleCategory';
import ArticleSearch from '@/components/knowledgeBaseScreen/ArticleSearch';
import SpotlightCategory from '@/components/knowledgeBaseScreen/SpotlightCategory';
import {
  category1Data,
  category2Data,
  spotlightData,
} from '@/content/articlesData';

export default function KnowledgeBaseScreen() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <SafeAreaView className="flex-1 h-full bg-background">
      <View className="px-2">
        <ArticleSearch />
      </View>
      <View className="my-2">
        <FilterSelector
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          categoryNames={['All', 'Cat 1', 'Cat 2']}
          backgroundColour="#BB86FC"
        />
      </View>
      {selectedFilter === 0 && (
        <View className="px-2">
          <SpotlightCategory data={spotlightData} categoryTitle="Spotlight" />
        </View>
      )}

      {(selectedFilter === 0 || selectedFilter === 1) && (
        <View className="mt-4">
          <ArticleCategory data={category1Data} categoryTitle="Category 1" />
        </View>
      )}

      {(selectedFilter === 0 || selectedFilter === 2) && (
        <View className="mt-4">
          <ArticleCategory data={category2Data} categoryTitle="Category 2" />
        </View>
      )}
    </SafeAreaView>
  );
}
