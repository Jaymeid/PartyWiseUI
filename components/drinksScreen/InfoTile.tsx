import React from 'react';

import { Text, View } from 'react-native';

interface InfoTileProps {
  heading: string;
  value: string;
}

export default function InfoTile({ heading, value }: InfoTileProps) {
  return (
    <View className="bg-[#2f2348] rounded-xl h-40 p-4 justify-center flex-col flex-1 border-blue-400 border">
      <Text className="text-xl text-gray-400 font-ibrand">{heading}</Text>
      <Text className="text-2xl text-white font-ibrand">{value}</Text>
    </View>
  );
}
