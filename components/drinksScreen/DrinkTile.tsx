import React, { useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import ButtonGroupSelector from '../ButtonGroupSelector';
import FormField from '../FormField';
import FrostedGlassModal from '../FrostedGlassModal';
import QuestionSwitch from '../QuestionSwitch';
import BeerGlass from './icons/BeerGlass';

enum SelectedSizeEnum {
  Pint,
  Half_Pint,
  Custom,
}

interface DrinkTileProps {
  title: string;
  alcoholPercentage: number;
  availableSizes: string[];
  DrinkIcon: React.FC<{ width: number; height: number }>;
}

export default function DrinkTile({
  title,
  alcoholPercentage,
  availableSizes,
  DrinkIcon,
}: DrinkTileProps) {
  const tickOpacity = useSharedValue(0);
  const mainOpacity = useSharedValue(1);
  const animationDuration = 200;
  const visibleDuration = 300;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);
  const [customSize, setCustomSize] = useState<string | undefined>(undefined);

  const animateTile = () => {
    tickOpacity.value = withSequence(
      withTiming(1, { duration: animationDuration }),
      withDelay(
        visibleDuration,
        withTiming(0, { duration: animationDuration }),
      ),
    );

    mainOpacity.value = withSequence(
      withTiming(0.2, { duration: animationDuration }),
      withDelay(
        visibleDuration,
        withTiming(1, { duration: animationDuration }),
      ),
    );
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    animateTile();
  };

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setModalVisible(true);
  };

  const handleCustomSizeChange = (text: string | undefined) => {
    if (!text) {
      setCustomSize('');
    } else if (/^\d*$/.test(text)) {
      setCustomSize(text);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
    setCustomSize('');
    setSelectedSize(0);
  };

  const handleAddPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    handleClose();
    animateTile();
  };

  const handleCancelPress = () => {
    handleClose();
  };

  const tickAnimatedStyle = useAnimatedStyle(() => ({
    opacity: tickOpacity.value,
  }));

  const mainAnimatedStyle = useAnimatedStyle(() => ({
    opacity: mainOpacity.value,
  }));

  return (
    <View className="flex-1">
      <TouchableOpacity
        className="relative items-center justify-center bg-background/40 border border-blue-400 rounded-3xl flex-1"
        onPress={handlePress}
        onLongPress={handleLongPress}
      >
        <BlurView
          intensity={30}
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
          tint="light"
        />
        <Animated.View
          style={mainAnimatedStyle}
          className="w-full bg-backgroundSecondary/20 rounded-3xl pt-3 overflow-hidden"
        >
          <View className="flex flex-col items-center justify-center w-full mb-6 px-4">
            <Text className="text-2xl text-white font-ibrand">{title}</Text>
            <BeerGlass width={64} height={64} />
            <Text className="text-textPrimary font-ibrand text-xl mt-2">
              Alcohol: {alcoholPercentage}%
            </Text>
          </View>
        </Animated.View>
        <Animated.View
          style={tickAnimatedStyle}
          className="absolute top-50 bottom-50 left-50 right-50"
        >
          <AntDesign name="checkcircleo" size={48} color="green" />
        </Animated.View>
      </TouchableOpacity>

      <FrostedGlassModal visible={modalVisible} setVisible={setModalVisible}>
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={handleClose}
        >
          <FontAwesome name="times" size={24} color="white" />
        </TouchableOpacity>

        <View className="w-full items-center">
          <Text className="text-3xl font-bold text-textPrimary mt-1">
            {title}
          </Text>
        </View>

        <View className="flex flex-col items-center justify-center w-full mb-6 px-4">
          <DrinkIcon width={96} height={96} />
          <Text className="text-textPrimary font-ibrand text-2xl my-2">
            Alcohol: {alcoholPercentage}%
          </Text>
          <ButtonGroupSelector
            options={availableSizes}
            setSelectedOption={setSelectedSize}
          />
          {selectedSize === SelectedSizeEnum.Custom && (
            <View className="w-full mt-4">
              <FormField
                value={customSize}
                keyboardType="numeric"
                annotation="ml"
                handleChangeText={(e) => handleCustomSizeChange(e)}
              />
            </View>
          )}
        </View>

        <View className="border-t border-gray-300">
          <View className="rounded-3xl overflow-hidden">
            <QuestionSwitch
              negativeActionClickHandler={handleCancelPress}
              negativeLabel="Cancel"
              positiveActionClickHandler={handleAddPress}
              positiveLabel="Add"
            />
          </View>
        </View>
      </FrostedGlassModal>
    </View>
  );
}
