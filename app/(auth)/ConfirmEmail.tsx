import React, { useEffect, useRef, useState } from 'react';

import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RoundedButton from '@/components/RoundedButton';

export default function ConfirmEmail() {
  const delayInSeconds = 30;
  const [timeRemaining, setTimeRemaining] = useState(delayInSeconds);
  const intervalRef = useRef<number>(null);
  const targetTimeRef = useRef(Date.now() + delayInSeconds * 1000); // Conver to ms

  useEffect(() => {
    function calculateSeconds() {
      const now = Date.now();
      const timeUntilExpiry = targetTimeRef.current - now;
      const seconds = Math.max(0, Math.floor(timeUntilExpiry / 1000));
      setTimeRemaining(seconds);

      if (timeUntilExpiry <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    intervalRef.current = setInterval(calculateSeconds, 1000);
    calculateSeconds();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <SafeAreaView className="h-full flex-1 bg-background justify-center">
      <View className="items-center px-2">
        <Text className="font-ibrand text-white text-2xl text-center">
          We've sent a confirmation email to user@example.com
        </Text>
        <Fontisto name="email" size={240} color="#5318d4" />

        <Text className="font-ibrand text-white text-2xl text-center">
          Please verify to continue setting up your account.
        </Text>

        <View className="flex-row gap-2 items-center mt-4">
          {timeRemaining > 0 ? (
            <Text className="font-ibrand text-white text-2xl">
              Resend available in {timeRemaining}s
            </Text>
          ) : (
            <>
              <Text className="font-ibrand text-white text-2xl">
                Didn't receive the email?
              </Text>
              <TouchableOpacity>
                <Text className="font-ibrand text-[#5318d4] text-2xl">
                  Resend
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <RoundedButton
        backgroundColour="bg-[#5318d4]"
        textColour={'text-white'}
        buttonText={'Remove this button later'}
        handlePress={() => router.replace('/(auth)/DOBSelect')}
      />
    </SafeAreaView>
  );
}
