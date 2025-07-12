import React, { useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import '../../global.css';

import FrostedGlassModal from '../FrostedGlassModal';

import OrganListItem from '@/types/OrganListItem';

interface OrganIconProps {
  id: string;
  image: ImageSourcePropType;
  title: string;
  modalText: string[];
  imageStyles: string;
  acitveItem: OrganListItem;
}

export default function OrganIcon({
  id,
  image,
  title,
  modalText,
  imageStyles,
  acitveItem,
}: OrganIconProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      className="w-auto max-w-40 h-auto min-h-0 rounded-lg justify-center items-center bg-transparent p-3"
      disabled={acitveItem.id !== id}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        setModalVisible(true);
      }}
    >
      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={() => setModalVisible(false)}
        >
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>

        <View className="px-4 py-4">
          <View className="w-full items-center">
            <Text className="text-3xl font-bold text-textPrimary mt-1">
              {title}
            </Text>
          </View>

          <View className="mt-4">
            {modalText.map((text, index) => {
              return (
                <Text
                  key={index}
                  className="text-left text-xl text-textPrimary my-1"
                >
                  {text}
                </Text>
              );
            })}
          </View>
        </View>
      </FrostedGlassModal>

      <View className="flex w-full h-[60%] justify-center items-center">
        <Image
          source={image}
          className={`${imageStyles} h-auto`}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
