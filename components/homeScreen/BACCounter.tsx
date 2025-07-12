import React, { useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { View, Text, TouchableOpacity } from 'react-native';

import FrostedGlassModal from '../FrostedGlassModal';

function BACCounter() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity
        className="bg-backgroundSecondary rounded-xl w-36 h-12 flex-row justify-center items-center border-blue-400 border"
        onPress={handlePress}
      >
        <Text className="text-white text-2xl font-ibrand h-auto mt-1.5">
          BAC: 0.10
        </Text>
      </TouchableOpacity>

      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={() => setModalVisible(false)}
        >
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>
        <View className="px-4 py-6">
          <View className="w-full items-center">
            <Text className="text-3xl font-bold text-textPrimary mt-1">
              Blood Alcohol Content
            </Text>
          </View>

          <View className="mt-4">
            <Text className="text-left text-xl text-textPrimary my-1">
              This is an estimate, do not use this to determine if you are safe
              to drive
            </Text>
            <Text className="text-left text-xl text-textPrimary my-1">
              This is how we calculate it
            </Text>
          </View>
        </View>
      </FrostedGlassModal>
    </View>
  );
}

export default BACCounter;
