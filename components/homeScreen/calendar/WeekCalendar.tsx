import React, { useState, useRef } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import { View, FlatList, ViewToken, TouchableOpacity } from 'react-native';

import DayIcon from './DayIcon';

// import { DrinkStatus } from '@/types/DrinkStatus';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface WeekCalendarProps {
  setDateLabel: (label: string) => void;
}

function WeekCalendar({ setDateLabel }: WeekCalendarProps) {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(0);
  const today = new Date();
  const originalStartOfWeek = new Date(today);
  const [pendingScrollToToday, setPendingScrollToToday] = useState(false);
  originalStartOfWeek.setDate(today.getDate() - today.getDay());

  const flatListRef = useRef<FlatList>(null);

  const onMomentumScrollEnd = () => {
    if (pendingScrollToToday) {
      setDateLabel(`${monthNames[today.getMonth()]} ${today.getFullYear()}`);
      setPendingScrollToToday(false);
    }
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken<number>[];
  }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0]?.index;
      setVisibleIndex(index);
      if (index != null) {
        const weekOffset = index * 7;
        const newDate = new Date(originalStartOfWeek);

        newDate.setDate(originalStartOfWeek.getDate() - weekOffset);
        setDateLabel(
          `${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`,
        );
      }
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 75,
  };

  function getWeekDates(offset: number): Date[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find the start of the current week (Sunday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const dayOffset = 7 * offset;
    startOfWeek.setDate(startOfWeek.getDate() - dayOffset);

    return Array.from({ length: 7 }, (_, i) => {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + i);
      return newDate;
    });
  }

  const scrollToWeek = (index: number) => {
    if (flatListRef.current) {
      setPendingScrollToToday(true);
      flatListRef.current.scrollToIndex({ index });
    }
  };

  return (
    <View className="w-full pb-2 relative">
      <View className="w-screen items-center pb-2 relative">
        {visibleIndex !== null && visibleIndex > 0 && (
          <TouchableOpacity
            className="w-[25px] h-[25px] rounded-full justify-center items-center absolute right-4 top-1/2 -translate-y-1/2"
            onPress={() => {
              scrollToWeek(0);
            }}
          >
            <AntDesign name="right" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        ref={flatListRef}
        pagingEnabled
        onMomentumScrollEnd={onMomentumScrollEnd}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        className="relative flex-grow-0 align-middle"
        data={Array.from({ length: 10000 }, (_, i) => i - 5000)}
        contentContainerStyle={{ flexGrow: 1, position: 'relative' }}
        horizontal
        inverted
        renderItem={({ index: flatListIndex }) => {
          const weekDates = getWeekDates(flatListIndex);
          return (
            <View className="flex-row justify-between px-6 w-screen">
              {weekDates.map((date, index) => (
                <DayIcon
                  date={date.getDate()}
                  key={date.toISOString()}
                  index={index}
                  drinkState={'sober'}
                  isToday={date.toDateString() === new Date().toDateString()}
                  showLabels
                />
              ))}
            </View>
          );
        }}
      />
    </View>
  );
}

export default WeekCalendar;
