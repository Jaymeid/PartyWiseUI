import React from 'react';

import { ScrollView, Text, View } from 'react-native';

import TimelineItem from './TimelineItem';
import BeerGlass from './icons/BeerGlass';
import ShotGlass from './icons/ShotGlass';

export default function Timeline() {
  return (
    <View>
      <Text className="text-white text-2xl font-ibrand">Timeline</Text>
      <ScrollView className="p-2 bg-[#121212] rounded-2xl border-blue-400 border max-h-96">
        <TimelineItem
          title={'Guinness'}
          Icon={BeerGlass}
          timeConsumed={'10:52 PM'}
        />
        <TimelineItem
          title={'Tequila'}
          Icon={ShotGlass}
          timeConsumed={'10:15 PM'}
        />
        <TimelineItem
          title={'Tequila'}
          Icon={BeerGlass}
          timeConsumed={'10:00 PM'}
        />
        <TimelineItem
          title={'Tequila'}
          Icon={ShotGlass}
          timeConsumed={'09:45 PM'}
        />
        <TimelineItem
          title={'Tequila'}
          Icon={BeerGlass}
          timeConsumed={'09:30 PM'}
          lastEntry
        />
      </ScrollView>
    </View>
  );
}
