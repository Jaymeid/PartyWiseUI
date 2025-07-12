import React from 'react';

import { View, Text, Image } from 'react-native';

import imagePlaceholder from '../../assets/images/image_placeholder.png';

export default function AccountPanel() {
  return (
    <View className="w-auto">
      <View className="flex-row items-center">
        <View className="w-auto">
          <Image
            className="w-20 h-20 bg-gray-100 rounded-full"
            source={imagePlaceholder}
          />
        </View>
        <View className="ml-1">
          <Text className="text-white text-xl font-ibrand">Welcome Back</Text>
          <Text className="text-white text-3xl font-ibrand">User</Text>
        </View>
      </View>
    </View>
  );
}
