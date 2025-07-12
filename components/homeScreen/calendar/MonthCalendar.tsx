import React, { useRef, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import {
  View,
  FlatList,
  Text,
  ViewToken,
  TouchableOpacity,
} from 'react-native';

import DayIcon from './DayIcon';

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

const weekDayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

interface MonthCalendarProps {
  setDateLabel: (label: string) => void;
}

function MonthCalendar({ setDateLabel }: MonthCalendarProps) {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(0);
  const today = new Date();
  const flatListRef = useRef<FlatList>(null);
  const [pendingScrollToToday, setPendingScrollToToday] = useState(false);
  const originalStartOfWeek = new Date(today);
  originalStartOfWeek.setDate(today.getDate() - today.getDay());

  const onMomentumScrollEnd = () => {
    if (pendingScrollToToday) {
      setDateLabel(`${monthNames[today.getMonth()]} ${today.getFullYear()}`);
      setPendingScrollToToday(false);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 75,
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
        const monthOffset = index;
        const newDate = new Date(originalStartOfWeek);

        newDate.setMonth(originalStartOfWeek.getMonth() - monthOffset);
        setDateLabel(
          `${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`,
        );
      }
    }
  };

  function getDaysInMonth(year: number, month: number) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const dayOfStartOfMonth = new Date(year, month - 1, 1).getDay();
    const dayOfEndOfMonth = new Date(year, month - 1, daysInMonth).getDay();

    const weekArr: number[] = [];

    // Add leading -1s for days before the month starts
    for (let i = 0; i < dayOfStartOfMonth; i++) {
      weekArr.push(-1);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      weekArr.push(i);
    }

    // Add trailing -1s for days after the month ends
    const remainingDays = 6 - dayOfEndOfMonth;
    for (let i = 0; i < remainingDays; i++) {
      weekArr.push(-1);
    }

    const weeks = [];
    for (let i = 0; i < weekArr.length; i += 7) {
      weeks.push(weekArr.slice(i, i + 7));
    }

    return weeks;
  }

  const scrollToWeek = (index: number) => {
    if (flatListRef.current) {
      setPendingScrollToToday(true);
      flatListRef.current.scrollToIndex({ index });
    }
  };

  return (
    <View>
      {visibleIndex !== null && visibleIndex > 0 && (
        <TouchableOpacity
          className="w-[25px] h-[25px] rounded-full justify-center items-center absolute right-2 -translate-y-3/4"
          onPress={() => {
            scrollToWeek(0);
          }}
        >
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      )}
      <View className="flex-row justify-between w-screen px-10">
        {weekDayLabels.map((item, index) => (
          <Text
            key={`day-label-${item}-${index}`}
            className="text-sm text-gray-300 font-ibrand"
          >
            {item}
          </Text>
        ))}
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
          const weekArrays = getDaysInMonth(
            today.getFullYear(),
            today.getMonth() + 1 - flatListIndex,
          );

          return (
            <View className="flex-col justify-between w-screen">
              {weekArrays.map((week, index) => (
                <View
                  key={`week-${flatListIndex}-${index}`}
                  className="flex-row justify-between px-6 w-screen"
                >
                  {week.map((date, index) => (
                    <View key={`day-${flatListIndex}-${index}`}>
                      {date === -1 ? (
                        <View className="w-10 h-10" />
                      ) : (
                        <DayIcon
                          date={week[index]}
                          index={index}
                          drinkState={'sober'}
                          isToday={false}
                          showLabels={false}
                        />
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          );
        }}
      />
    </View>
  );
}

export default MonthCalendar;
