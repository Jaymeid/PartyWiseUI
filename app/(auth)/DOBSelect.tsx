import React, { useEffect, useMemo, useState } from 'react';

import { router } from 'expo-router';
import {
  FlatList,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RoundedButton from '@/components/RoundedButton';

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, i) => currentYear - i,
);

const months: string[] = [
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

const numberOfDaysInMonth: number[] = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;

function isLeapYear(year: number) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

export default function DOBSelect() {
  const minimumDOB = new Date();
  minimumDOB.setFullYear(minimumDOB.getFullYear() - 18);

  const [selectedDay, setSelectedDay] = useState(minimumDOB.getDate());
  const [selectedMonth, setSelectedMonth] = useState(minimumDOB.getMonth());
  const [selectedYear, setSelectedYear] = useState(minimumDOB.getFullYear());
  const [selectedDate, setSelectedDate] = useState(minimumDOB);

  const days = useMemo(() => {
    let monthLength: number;

    if (isLeapYear(selectedYear) && selectedMonth === 1) {
      monthLength = 29;
    } else {
      monthLength = numberOfDaysInMonth[selectedMonth];
    }

    return Array.from({ length: monthLength }, (_, i) => i + 1);
  }, [selectedMonth, selectedYear]);

  const onSnap =
    (type: 'day' | 'month' | 'year') =>
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
      if (type === 'day') setSelectedDay(days[index]);
      if (type === 'month') setSelectedMonth(index);
      if (type === 'year') setSelectedYear(years[index]);
    };

  const [scrollOffsetDay, setScrollOffsetDay] = useState(0);
  const [scrollOffsetMonth, setScrollOffsetMonth] = useState(0);
  const [scrollOffsetYear, setScrollOffsetYear] = useState(0);

  useEffect(() => {
    const newDate = new Date(selectedYear, selectedMonth, selectedDay);
    setSelectedDate(newDate);
  }, [selectedDay, selectedMonth, selectedYear]);

  useEffect(() => {
    if (!days.includes(selectedDay)) {
      setSelectedDay(days[days.length - 1]);
    }
  }, [days]);

  const handleNextPress = () => {
    router.push('/(auth)/GenderSelect');
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-background justify-center">
      <View className="items-center px-2">
        <Text className="font-ibrand text-white text-3xl text-center mb-4">
          When were you born?
        </Text>

        <View className="w-full relative">
          <View
            className="absolute z-10 bg-white/10 rounded-2xl left-0 right-0 top-[80]"
            pointerEvents="none"
            style={{
              height: ITEM_HEIGHT,
            }}
          />

          <View
            className="flex-row justify-between"
            style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
          >
            <FlatList
              data={days}
              onScroll={(e) => {
                setScrollOffsetDay(e.nativeEvent.contentOffset.y);
              }}
              scrollEventThrottle={16}
              initialScrollIndex={days.indexOf(selectedDay)}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              keyExtractor={(item) => `day-${item}`}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={onSnap('day')}
              bounces={false}
              contentContainerStyle={{
                paddingVertical: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
                alignItems: 'center',
              }}
              style={{ flex: 1 }}
              renderItem={({ item, index }) => {
                const centerIndex = scrollOffsetDay / ITEM_HEIGHT;
                const distanceFromCenter = Math.abs(index - centerIndex);
                const opacity =
                  distanceFromCenter < 2
                    ? Math.max(1 - distanceFromCenter * 0.3, 0.2)
                    : 0.1;

                return (
                  <View
                    style={{
                      height: ITEM_HEIGHT,
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity,
                    }}
                  >
                    <Text className="font-ibrand text-white text-xl">
                      {item}
                    </Text>
                  </View>
                );
              }}
            />

            <FlatList
              data={months}
              onScroll={(e) => {
                setScrollOffsetMonth(e.nativeEvent.contentOffset.y);
              }}
              scrollEventThrottle={16}
              initialScrollIndex={selectedMonth}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              keyExtractor={(item) => `month-${item}`}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={onSnap('month')}
              bounces={false}
              contentContainerStyle={{
                paddingVertical: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
                alignItems: 'center',
              }}
              style={{ flex: 1 }}
              renderItem={({ item, index }) => {
                const centerIndex = scrollOffsetMonth / ITEM_HEIGHT;
                const distanceFromCenter = Math.abs(index - centerIndex);
                const opacity =
                  distanceFromCenter < 2
                    ? Math.max(1 - distanceFromCenter * 0.3, 0.2)
                    : 0.1;

                return (
                  <View
                    style={{
                      height: ITEM_HEIGHT,
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity,
                    }}
                  >
                    <Text className="font-ibrand text-white text-xl">
                      {item}
                    </Text>
                  </View>
                );
              }}
            />

            <FlatList
              data={years}
              onScroll={(e) => {
                setScrollOffsetYear(e.nativeEvent.contentOffset.y);
              }}
              scrollEventThrottle={16}
              initialScrollIndex={years.indexOf(selectedYear)}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              keyExtractor={(item) => `year-${item}`}
              snapToInterval={ITEM_HEIGHT}
              decelerationRate="fast"
              showsVerticalScrollIndicator={false}
              onMomentumScrollEnd={onSnap('year')}
              bounces={false}
              contentContainerStyle={{
                paddingVertical: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
                alignItems: 'center',
              }}
              style={{ flex: 1 }}
              renderItem={({ item, index }) => {
                const centerIndex = scrollOffsetYear / ITEM_HEIGHT;
                const distanceFromCenter = Math.abs(index - centerIndex);
                const opacity =
                  distanceFromCenter < 2
                    ? Math.max(1 - distanceFromCenter * 0.3, 0.2)
                    : 0.1;

                return (
                  <View
                    style={{
                      height: ITEM_HEIGHT,
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity,
                    }}
                  >
                    <Text className="font-ibrand text-white text-xl">
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          {selectedDate > minimumDOB && (
            <Text className="text-red-500 font-ibrand text-l text-center mt-2">
              Sorry, you have to be 18 or over to use this app
            </Text>
          )}
        </View>
      </View>
      <View className="w-full absolute bottom-10 px-5">
        <RoundedButton
          backgroundColour={
            selectedDate > minimumDOB ? 'bg-gray-700' : 'bg-[#5318d4]'
          }
          disabled={selectedDate > minimumDOB}
          textColour={'text-white'}
          buttonText={'Next'}
          handlePress={handleNextPress}
        />
      </View>
    </SafeAreaView>
  );
}
