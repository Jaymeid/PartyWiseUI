import React, { useEffect, useState } from 'react';

import Fuse from 'fuse.js';
import { ScrollView, View } from 'react-native';

import SearchBar from '../SearchBar';
import DrinkTile from './DrinkTile';
import BeerGlass from './icons/BeerGlass';

import { allData } from '@/content/drinksData';

interface DrinkSearchItem {
  name: string;
  alcoholPercentage: number;
  availableSizes: string[];
  DrinkIcon: React.FC<{ width: number; height: number }>;
}

interface DrinkSearchProps {
  setShowScrollView: (newValue: boolean) => void;
}

export default function DrinkSearch({ setShowScrollView }: DrinkSearchProps) {
  const [query, setQuery] = useState('');
  const [resultsAsSearchItem, setResultsAsSearchItem] = useState<
    DrinkSearchItem[]
  >([]);
  const [showResultsContainer, setShowResultsContainer] = useState(false);

  const fuse = new Fuse(allData, { keys: ['name'] });

  const handleChangeText = (e: string) => {
    setShowScrollView(e.trim() === '');
    setQuery(e);
    const rawSearchResults = fuse.search(query);
    const tempResultsArray: DrinkSearchItem[] = [];
    rawSearchResults.forEach((result) => {
      tempResultsArray.push({
        name: result.item.name,
        alcoholPercentage: result.item.alcoholPercentage,
        availableSizes: result.item.availableSizes,
        DrinkIcon: BeerGlass,
      });
    });

    setResultsAsSearchItem(tempResultsArray);
    setShowResultsContainer(e.trim() !== '');
  };

  useEffect(() => {
    setShowScrollView(query.trim() === '');
  }, [query]);

  return (
    <View>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleChangeText={handleChangeText}
        setShowResultsContainer={setShowResultsContainer}
        placeholderText="Search for a drink"
      />

      {showResultsContainer && (
        <ScrollView className="px-2" keyboardShouldPersistTaps="handled">
          <View className="flex-row flex-wrap -mx-2">
            {resultsAsSearchItem.map((item, index) => (
              <View key={`drink-${index}`} className="w-1/2 p-2">
                <DrinkTile
                  title={item.name}
                  alcoholPercentage={item.alcoholPercentage}
                  availableSizes={item.availableSizes}
                  DrinkIcon={BeerGlass}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
