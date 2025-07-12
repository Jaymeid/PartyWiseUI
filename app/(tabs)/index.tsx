import React from 'react';

import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccountPanel from '@/components/homeScreen/AccountPanel';
import BACCounter from '@/components/homeScreen/BACCounter';
import OrganCarousel from '@/components/homeScreen/OrganCarousel';
import SenseTray from '@/components/homeScreen/SenseTray';
import CalendarPanel from '@/components/homeScreen/calendar/CalendarPanel';
import OrganImages from '@/constants/OrganImages';
import {
  chestOrganData,
  midRegionOrganData,
  lowerRegionOrganData,
} from '@/content/organData';

import '../../global.css';

export default function TabOneScreen() {
  return (
    <SafeAreaView className="flex-1 h-full bg-background">
      <View className="flex-row items-center justify-between p-3 pb-0">
        <AccountPanel />
        <BACCounter />
      </View>
      <CalendarPanel />
      <View className="flex-1">
        <View className="relative justify-center items-center">
          <Image source={OrganImages.humanBodyOutline} />
        </View>
        <View className="absolute top-[30%] w-screen">
          <OrganCarousel data={chestOrganData} />
        </View>
        <View className="absolute top-[50%] w-screen">
          <OrganCarousel data={midRegionOrganData} />
        </View>
        <View className="absolute top-[65%] w-screen">
          <OrganCarousel data={lowerRegionOrganData} />
        </View>
      </View>

      <SenseTray />
    </SafeAreaView>
  );
}
