import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity, View } from 'react-native';

interface SearchBarProps {
  query: string;
  setQuery: (e: string) => void;
  handleChangeText: (e: string) => void;
  setShowResultsContainer: (newValue: boolean) => void;
  placeholderText: string;
}

export default function SearchBar({
  query,
  setQuery,
  handleChangeText,
  setShowResultsContainer,
  placeholderText,
}: SearchBarProps) {
  const handleClearPress = () => {
    setQuery('');
    setShowResultsContainer(false);
  };

  return (
    <View>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-backgroundSecondary rounded-2xl focus:border-secondary items-center flex-row space-x-4 z-50">
        <TextInput
          placeholder={placeholderText}
          value={query}
          className="mt-0.5 flex-1 font-pregular text-white font-ibrand text-lg pb-2"
          placeholderTextColor="#bababf"
          onChangeText={handleChangeText}
          onPress={() => {
            setShowResultsContainer(query.trim() !== '');
          }}
          textAlignVertical="center"
        />

        {query && (
          <TouchableOpacity className="mr-2" onPress={handleClearPress}>
            <MaterialIcons name="cancel" size={24} color="gray" />
          </TouchableOpacity>
        )}

        <View>
          <FontAwesome name="search" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
}
