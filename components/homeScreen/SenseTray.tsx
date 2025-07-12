import React, { useState, useRef, useEffect, useCallback } from 'react';

import * as Haptics from 'expo-haptics';
import { View, Dimensions, Text, FlatList, ViewToken } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import SenseIcon from './SenseIcon';
import { sensesData } from '../../content/sensesData';

import SenseData from '@/types/SenseData';

interface ViewableItemsChanged {
  viewableItems: ViewToken<SenseData>[];
  changed?: ViewToken<SenseData>[];
}

const { height } = Dimensions.get('window');

const EXPANDED_HEIGHT = -height * 0.1;
const COLLAPSED_HEIGHT = height * 0.29;

const DraggableTray = () => {
  const translateY = useSharedValue(COLLAPSED_HEIGHT);
  const context = useSharedValue({ startY: COLLAPSED_HEIGHT });

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef?.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    });
  }, [activeIndex]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value.startY = translateY.value;
    })
    .minDistance(80)
    .onUpdate((event) => {
      translateY.value = Math.max(
        context.value.startY,
        Math.min(EXPANDED_HEIGHT, context.value.startY + event.translationY),
      );
    })
    .onEnd((event) => {
      const velocityThreshold = 500;
      const isMovingUp = event.velocityY < -velocityThreshold;
      const isMovingDown = event.velocityY > velocityThreshold;

      if (isMovingUp) {
        translateY.value = withSpring(EXPANDED_HEIGHT, {
          damping: 10,
          stiffness: 100,
        });
      } else if (isMovingDown) {
        translateY.value = withSpring(COLLAPSED_HEIGHT, {
          damping: 10,
          stiffness: 100,
        });
      } else {
        // Snap to the closest height
        const shouldExpand =
          translateY.value > (COLLAPSED_HEIGHT + EXPANDED_HEIGHT) / 2;
        translateY.value = withSpring(
          shouldExpand ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
          {
            damping: 15,
            stiffness: 120,
          },
        );
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: ViewableItemsChanged) => {
      if (
        viewableItems?.[0]?.index !== null &&
        !isNaN(viewableItems?.[0]?.index)
      ) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setActiveIndex(viewableItems?.[0]?.index);
      }
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        className="absolute bottom-[-30%] left-0 right-0 bg-backgroundSecondary rounded-t-3xl h-[80%]"
        style={animatedStyle}
      >
        <View className="h-1 bg-white w-16 self-center my-2 rounded-full" />
        <View className="flex flex-row justify-between w-full p-4">
          {sensesData.map((item, index) => (
            <SenseIcon
              key={item.id}
              index={index}
              onPress={() => {
                setActiveIndex(index);
                translateY.value = withSpring(EXPANDED_HEIGHT, {
                  damping: 10,
                  stiffness: 100,
                });
              }}
              activeIndex={activeIndex}
            />
          ))}
        </View>
        <View>
          <FlatList
            ref={flatListRef}
            onViewableItemsChanged={handleViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            className="relative flex-grow-0 align-middle"
            data={sensesData}
            contentContainerStyle={{
              flexGrow: 1,
              position: 'relative',
            }}
            horizontal
            renderItem={({ item }) => {
              return (
                <View className="w-screen">
                  <View className="items-center">
                    <Text className="text-3xl text-white font-bold font-ibrand">
                      {item.title}
                    </Text>
                  </View>
                  <Text className="text-white font-ibrand text-xl leading-8 px-4">
                    {item.content}
                  </Text>
                </View>
              );
            }}
          />

          <View className="flex flex-row justify-center w-full p-4">
            {sensesData.map((item, index) => (
              <View
                key={`scroll-indicator-${index}`}
                className={`w-2 h-2 rounded-full ml-5 mt-5 ${activeIndex === index ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default DraggableTray;
