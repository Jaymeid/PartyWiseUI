import React, { useRef, useState } from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FormField from '@/components/FormField';
import RoundedButton from '@/components/RoundedButton';

export default function SignUp() {
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPasswords, setShowPasswords] = useState(false);

  const [usernameFieldError, setUsernameFieldError] = useState(false);
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [passwordFieldsError, setPasswordsFieldError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleUsernameChangeText = (e: string) => {
    setUsername(e);
    setUsernameFieldError(false);
    setFormSubmitted(false);
  };

  const handleEmailChangeText = (e: string) => {
    setEmail(e);
    setEmailFieldError(false);
    setFormSubmitted(false);
  };

  const handlePasswordChangeText = (e: string) => {
    setPassword(e);
    setPasswordsFieldError(false);
    setFormSubmitted(false);
  };

  const handleConfirmPasswordChangeText = (e: string) => {
    setConfirmPassword(e);
    setPasswordsFieldError(false);
    setFormSubmitted(false);
  };

  const handleShowPasswordPress = () => {
    setShowPasswords((previousValue) => !previousValue);
  };

  const handleCreateAccountPress = () => {
    // const isUsernameEmpty = !username;
    // const isEmailEmpty = !email;
    // const isPasswordEmpty = !password;
    // const isConfirmPasswordEmpty = !confirmPassword;
    // const doPasswordsMatch = password === confirmPassword;

    // setUsernameFieldError(isUsernameEmpty);
    // setEmailFieldError(isEmailEmpty);
    // setPasswordsFieldError(
    //   isPasswordEmpty || isConfirmPasswordEmpty || !doPasswordsMatch,
    // );
    // setFormSubmitted(true);

    // if (
    //   !isUsernameEmpty &&
    //   !isPasswordEmpty &&
    //   !isConfirmPasswordEmpty &&
    //   doPasswordsMatch
    // ) {
    //   router.push('/(auth)/DOBSelect');
    // }
    router.push('/(auth)/ConfirmEmail');
  };

  const handleSignInPress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="bg-background flex-1 h-full justify-center">
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={50}
      ></KeyboardAvoidingView>
      <Text className="text-white text-3xl font-ibrand text-center mb-4">
        Create your account
      </Text>

      <View className="px-4">
        <View className="flex-col gap-4">
          <FormField
            value={username}
            handleChangeText={handleUsernameChangeText}
            placeholder="Username"
            otherStyles="bg-[#32264b]"
            showError={usernameFieldError}
            returnKeyType="next"
            ref={usernameRef}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <FormField
            value={email}
            handleChangeText={handleEmailChangeText}
            placeholder="Email address"
            otherStyles="bg-[#32264b]"
            showError={emailFieldError}
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />

          <View className="flex-row justify-between">
            {formSubmitted && password !== confirmPassword ? (
              <Text className="text-red-500 text-xl font-ibrand">
                Password does not match
              </Text>
            ) : (
              <View /> // Empty View to maintain spacing
            )}
            <TouchableOpacity onPress={handleShowPasswordPress}>
              {showPasswords ? (
                <Entypo name="eye-with-line" size={24} color="gray" />
              ) : (
                <Entypo name="eye" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>

          <FormField
            value={password}
            handleChangeText={handlePasswordChangeText}
            placeholder="Password"
            otherStyles="bg-[#32264b]"
            secureTextEntry={!showPasswords}
            showError={passwordFieldsError}
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
          />
          <FormField
            value={confirmPassword}
            handleChangeText={handleConfirmPasswordChangeText}
            placeholder="Confirm password"
            otherStyles="bg-[#32264b]"
            secureTextEntry={!showPasswords}
            showError={passwordFieldsError}
            onSubmitEditing={handleCreateAccountPress}
            returnKeyType="done"
            ref={confirmPasswordRef}
          />
        </View>

        <View className="mt-4">
          <RoundedButton
            backgroundColour={'bg-[#5318d4]'}
            textColour={'text-white'}
            buttonText="Create account"
            handlePress={handleCreateAccountPress}
          />
        </View>
        <View className="mt-4 justify-center flex-row gap-1">
          <Text className="text-gray-400 font-ibrand text-xl">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={handleSignInPress}>
            <Text className="text-xl font-ibrand text-[#5318d4]">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
