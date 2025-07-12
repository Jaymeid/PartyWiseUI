import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AddDrinkButton from '@/components/drinksScreen/AddDrinkButton';
import InfoTile from '@/components/drinksScreen/InfoTile';
import Timeline from '@/components/drinksScreen/Timeline';

export default function DrinksTabScreen() {
  return (
    <SafeAreaView className="bg-background flex-1 h-full">
      <View className="px-5">
        <Text className="text-white text-2xl font-ibrand">Current session</Text>
        <View className="flex-row gap-x-5 justify-stretch">
          <InfoTile heading="Drinks" value="2" />
          <InfoTile heading="BAC" value="0.02%" />
        </View>
      </View>
      <View className="h-40 px-5 mt-5">
        <InfoTile heading="Time until sober" value="1h 30m" />
      </View>
      <View className="px-5 mt-5">
        <Timeline />
      </View>
      <View className="absolute bottom-10 right-5">
        <AddDrinkButton />
      </View>
    </SafeAreaView>
  );
}
