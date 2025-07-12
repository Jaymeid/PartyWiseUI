import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FilterSelector from '@/components/FilterSelector';
import DrinkSearch from '@/components/drinksScreen/DrinkSearch';
import DrinkTile from '@/components/drinksScreen/DrinkTile';
import BeerGlass from '@/components/drinksScreen/icons/BeerGlass';
import drinksData, { allData, categoryNames } from '@/content/drinksData';
import { Drink } from '@/types/Drink';

export default function AddDrinkScreen() {
  const [showScrollView, setShowScrollView] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [visibleDataSet, setVisibleDataSet] = useState<Drink[]>(allData);

  useEffect(() => {
    const dataSet = drinksData[selectedFilter];
    setVisibleDataSet(dataSet);
  }, [selectedFilter]);

  return (
    <SafeAreaView className="flex-1 h-full bg-background" edges={['top']}>
      <View className="px-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="px-2 mb-2">
        <View className="mb-2">
          <DrinkSearch setShowScrollView={setShowScrollView} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-2"
        >
          <FilterSelector
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            categoryNames={categoryNames}
            backgroundColour="#60a5fa"
          />
        </ScrollView>
      </View>

      {showScrollView && (
        <ScrollView className="px-4 z-50">
          <View className="flex-row flex-wrap -mx-2">
            {visibleDataSet.map((item, index) => (
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
    </SafeAreaView>
  );
}
