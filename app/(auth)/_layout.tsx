import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { router, Stack, usePathname } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import ProgressBar from '@/components/ProgressBar';

const progressMap: Record<string, number> = {
  '/ConfirmEmail': 0,
  '/DOBSelect': 25,
  '/GenderSelect': 50,
  '/WeightEntry': 75,
  '/Success': 100,
};

const AuthLayout = () => {
  const pathname = usePathname();
  const progressPercentage = progressMap[pathname] ?? null;

  return (
    <>
      {progressPercentage !== null && (
        <View className="px-4 w-full absolute top-20 z-50">
          <ProgressBar
            progressPercentage={progressPercentage}
            colour="bg-[#5318d4]"
          />
          {progressPercentage > 0 && pathname !== '/Success' && (
            <TouchableOpacity onPress={() => router.back()} className="mt-4">
              <AntDesign name="leftcircleo" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      )}
      <Stack>
        <Stack.Screen
          name="SignIn"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmEmail"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DOBSelect"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GenderSelect"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WeightEntry"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Success"
          options={{
            headerLeft: () => null,
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
