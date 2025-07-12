import React from 'react';

import { BlurView } from 'expo-blur';
import { Modal, TouchableOpacity, View } from 'react-native';

interface FrostedGlassModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export default function FrostedGlassModal({
  children,
  visible,
  setVisible,
}: FrostedGlassModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setVisible(false)}
    >
      <TouchableOpacity
        className="absolute h-full w-full"
        onPress={() => setVisible(false)}
      />
      <View className="flex-1 pb-[50%] justify-center items-center">
        <View className="w-3/4 relative items-center justify-center bg-background/40">
          <BlurView
            intensity={30}
            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
            tint="light"
          />

          <View className="w-full bg-backgroundSecondary/20 rounded-3xl border border-border pt-3 overflow-hidden">
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
