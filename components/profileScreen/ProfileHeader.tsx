import React, { useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import imagePlaceholder from '../../assets/images/image_placeholder.png';
import FrostedGlassModal from '../FrostedGlassModal';
import QuestionSwitch from '../QuestionSwitch';

interface ProfileHeaderProps {
  username: string;
  followerCount: number;
  followingCount: number;
}

export default function ProfileHeader({
  username,
  followerCount,
  followingCount,
}: ProfileHeaderProps) {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickProfilePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
      setModalVisible(true);
    }
  };

  const addPressHandler = () => {
    closeHandler();
  };

  const closeHandler = () => {
    setModalVisible(false);
    setProfilePicture(null);
  };

  return (
    <View className="w-auto">
      <View className="flex-row items-center">
        <TouchableOpacity className="w-auto" onPress={pickProfilePicture}>
          <Image
            className="w-32 h-32 bg-gray-100 rounded-full"
            source={imagePlaceholder}
          />
          <View className="absolute right-0 bottom-0 bg-gray-500 rounded-md p-1">
            <AntDesign name="edit" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <View className="ml-1">
          <Text className="text-white text-3xl font-ibrand">{username}</Text>
          <View className="flex-row">
            <Text className="text-white text-xl font-ibrand">
              Followers: {followerCount}
            </Text>
            <View className="flex justify-center ml-2 mr-2 mb-1">
              <FontAwesome name="circle" size={8} color="white" />
            </View>
            <Text className="text-white text-xl font-ibrand">
              Following: {followingCount}
            </Text>
          </View>
        </View>
      </View>

      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <View className="flex-col px-4 py-4 items-center">
          <Text className="text-3xl font-ibrand text-textPrimary mb-4">
            Set profile photo
          </Text>
          {profilePicture && (
            <Image
              className="w-36 h-36 rounded-full"
              source={{ uri: profilePicture }}
            />
          )}
        </View>
        <View className="border-t border-gray-300">
          <View className="rounded-3xl overflow-hidden">
            <QuestionSwitch
              negativeActionClickHandler={closeHandler}
              positiveActionClickHandler={addPressHandler}
              negativeLabel={'Cancel'}
              positiveLabel={'Confirm'}
            />
          </View>
        </View>
      </FrostedGlassModal>
    </View>
  );
}
