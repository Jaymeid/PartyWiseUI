import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import FormField from '../FormField';
import QuestionSwitch from '../QuestionSwitch';
import ProfileOption from './ProfileOption';
import FrostedGlassModal from '../FrostedGlassModal';

export default function ChangeUsername() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [failedSubmission, setFailedSubmission] = useState(false);

  function handleConfirmPress() {
    if (!newUsername) {
      setFailedSubmission(true);
      return;
    }
    handleClose();
  }

  function handleClose() {
    setFailedSubmission(false);
    setModalVisible(false);
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row justify-between pr-3 items-center"
      >
        <ProfileOption label="Change username" />
        <AntDesign name="edit" size={20} color="gray" />
      </TouchableOpacity>

      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <View className="flex flex-col items-center justify-center w-full mb-6 px-4">
          <View className="mb-2 w-full">
            <FormField
              title="New username"
              showError={failedSubmission}
              handleChangeText={(e) => {
                setFailedSubmission(false);
                setNewUsername(e);
              }}
            />
          </View>
        </View>
        <View className="border-t border-gray-300">
          <View className="rounded-3xl overflow-hidden">
            <QuestionSwitch
              negativeActionClickHandler={handleClose}
              positiveActionClickHandler={handleConfirmPress}
              negativeLabel="Cancel"
              positiveLabel="Confirm"
            />
          </View>
        </View>
      </FrostedGlassModal>
    </View>
  );
}
