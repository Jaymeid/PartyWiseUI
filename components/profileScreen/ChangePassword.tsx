import React, { useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity, View } from 'react-native';

import ProfileOption from './ProfileOption';
import FormField from '../FormField';
import FrostedGlassModal from '../FrostedGlassModal';
import QuestionSwitch from '../QuestionSwitch';

export default function ChangePassword() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mismatchedPasswords, setMismatchedPasswords] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState(false);

  function handleConfirmPress() {
    if (!currentPassword) {
      setCurrentPasswordError(true);
      return;
    }
    if (newPassword !== confirmPassword || !newPassword || !confirmPassword) {
      setMismatchedPasswords(true);
      return;
    }
    handleClose();
  }

  function handleClose() {
    setModalVisible(false);
    setMismatchedPasswords(false);
    setCurrentPasswordError(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex-row justify-between pr-3 items-center"
      >
        <ProfileOption label="Change password" />
        <AntDesign name="edit" size={20} color="gray" />
      </TouchableOpacity>

      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <View className="flex flex-col items-center justify-center w-full mb-6 px-4 gap-2">
          <FormField
            title="Current password"
            showError={currentPasswordError}
            secureTextEntry
            handleChangeText={(e) => {
              setCurrentPasswordError(false);
              setCurrentPassword(e);
            }}
          />
          <FormField
            title="New password"
            showError={mismatchedPasswords}
            secureTextEntry
            handleChangeText={(e) => {
              setMismatchedPasswords(false);
              setNewPassword(e);
            }}
          />
          <FormField
            title="Confirm new password"
            showError={mismatchedPasswords}
            secureTextEntry
            handleChangeText={(e) => {
              setMismatchedPasswords(false);
              setConfirmPassword(e);
            }}
          />
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
