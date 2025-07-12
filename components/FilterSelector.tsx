import React from 'react';

import { View } from 'react-native';

import Filter from './Filter';

interface FilterSelectorProps {
  setSelectedFilter: (index: number) => void;
  selectedFilter: number;
  categoryNames: string[];
  backgroundColour: string;
}

export default function FilterSelector({
  setSelectedFilter,
  selectedFilter,
  categoryNames,
  backgroundColour,
}: FilterSelectorProps) {
  return (
    <View className="flex-row justify-center">
      {categoryNames.map((item, index) => (
        <View className="px-2" key={`filter-${index}`}>
          <Filter
            label={item}
            handlePress={() => setSelectedFilter(index)}
            active={selectedFilter === index}
            backgroundColour={backgroundColour}
          />
        </View>
      ))}
    </View>
  );
}
