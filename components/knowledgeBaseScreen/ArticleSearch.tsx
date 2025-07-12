import React, { useState } from 'react';

import Fuse from 'fuse.js';
import { Keyboard, TouchableOpacity, View } from 'react-native';

import SearchResultsContainer from './SearchResultsContainer';
import imagePlaceholder from '../../assets/images/image_placeholder.png';
import SearchBar from '../SearchBar';

import { allData } from '@/content/articlesData';
import { SearchItem } from '@/types/SearchItem';

export default function ArticleSearch() {
  const [query, setQuery] = useState('');
  const [resultsAsSearchItem, setResultsAsSearchItem] = useState<SearchItem[]>(
    [],
  );
  const [showResultsContainer, setShowResultsContainer] = useState(false);

  const fuse = new Fuse(allData, { keys: ['title'] });

  const handleChangeText = (e: string) => {
    setQuery(e);
    const rawSearchResults = fuse.search(query);
    const tempResultsArray: SearchItem[] = [];
    rawSearchResults.forEach((result) => {
      tempResultsArray.push({
        image: imagePlaceholder,
        title: result.item.title,
      });
    });

    setResultsAsSearchItem(tempResultsArray);
    setShowResultsContainer(e.trim() !== '');
  };

  return (
    <View>
      {showResultsContainer && (
        <TouchableOpacity
          className="w-screen h-screen absolute z-40"
          onPress={() => {
            setShowResultsContainer(false);
            Keyboard.dismiss();
          }}
        />
      )}

      <SearchBar
        query={query}
        setQuery={setQuery}
        handleChangeText={handleChangeText}
        setShowResultsContainer={setShowResultsContainer}
        placeholderText="Search for an article"
      />

      {showResultsContainer && (
        <View className="items-center absolute z-50 top-16 left-0 right-0">
          <SearchResultsContainer results={resultsAsSearchItem.slice(0, 6)} />
        </View>
      )}
    </View>
  );
}
