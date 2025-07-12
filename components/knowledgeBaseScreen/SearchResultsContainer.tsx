import React from 'react';

import { FlatList, Text, View } from 'react-native';

import SearchResult from './SearchResult';
import imagePlaceholder from '../../assets/images/image_placeholder.png';

import { SearchItem } from '@/types/SearchItem';

interface SearchResultsContainerProps {
  results: SearchItem[];
}

export default function SearchResultsContainer({
  results,
}: SearchResultsContainerProps) {
  if (results.length === 0) {
    return (
      <View className="bg-backgroundSecondary w-4/5 border-solid border-2 rounded-xl border-blue-400 p-2">
        <Text className="text-xl text-white font-ibrand">No results</Text>
      </View>
    );
  }

  return (
    <View className="bg-backgroundSecondary w-4/5 border-solid border-2 rounded-xl border-blue-400">
      <FlatList
        data={results}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => {
          return (
            <SearchResult articleTitle={item.title} image={imagePlaceholder} />
          );
        }}
      />
    </View>
  );
}
