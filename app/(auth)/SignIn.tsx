import React, { useRef } from 'react';

import { router } from 'expo-router';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormField from '@/components/FormField';
import RoundedButton from '@/components/RoundedButton';

export default function SignInPage() {
  const handleUsernameChangeText = () => {};
  const handlePasswordChangeText = () => {};
  const handleForgotPasswordPress = () => {};
  const handleSignInPress = () => {};
  const handleSignUpPress = () => {
    router.navigate('/(auth)/SignUp');
  };

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <SafeAreaView className="bg-background flex-1 h-full justify-center">
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={50}
      >
        <Text className="text-white text-3xl font-ibrand text-center mb-4">
          Welcome
        </Text>

        <View className="px-4">
          <View className="flex-col gap-4">
            <FormField
              handleChangeText={handleUsernameChangeText}
              placeholder="Email or username"
              otherStyles="bg-[#32264b]"
              ref={usernameRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <FormField
              handleChangeText={handlePasswordChangeText}
              placeholder="Password"
              otherStyles="bg-[#32264b]"
              secureTextEntry
              ref={passwordRef}
              returnKeyType="done"
              onSubmitEditing={handleSignInPress}
            />
          </View>
          <TouchableOpacity
            onPress={handleForgotPasswordPress}
            className="my-4"
          >
            <Text className="text-slate-600 underline mt-2 pl-2">
              Forgot password?
            </Text>
          </TouchableOpacity>

          <RoundedButton
            backgroundColour={'bg-[#5318d4]'}
            textColour={'text-white'}
            buttonText="Sign in"
            handlePress={handleSignInPress}
          />

          <View className="mt-4 justify-center flex-row gap-1">
            <Text className="text-gray-400 font-ibrand text-xl">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text className="text-xl font-ibrand text-[#5318d4]">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
