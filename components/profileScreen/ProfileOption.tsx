import React from 'react';

import { Text, View } from 'react-native';

interface ProfileOptionProps {
  label: string;
  supportiveText?: string;
}

export default function ProfileOption({
  label,
  supportiveText,
}: ProfileOptionProps) {
  return (
    <View>
      <View className="pl-5">
        <Text className="text-xl text-white font-ibrand">{label}</Text>
        {supportiveText && (
          <View className="pl-2">
            <Text className="text-xl text-gray-400 font-ibrand">
              {supportiveText}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
