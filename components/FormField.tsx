import React from 'react';

import {
  View,
  Text,
  TextInput,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { KeyboardTypeOptions } from 'react-native';

type FormFieldProps = {
  title?: string;
  annotation?: string;
  value?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardTypeOptions;
  showError?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  ref?: React.RefObject<TextInput | null>;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
};

const FormField = ({
  title,
  annotation,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  showError = false,
  placeholder,
  secureTextEntry,
  ref,
  returnKeyType,
  onSubmitEditing,
}: FormFieldProps) => {
  return (
    <View className="space-y-2">
      {title && (
        <Text className="text-base text-gray-100 font-ibrand">{title}</Text>
      )}

      <View
        className={`${showError ? 'border-red-500' : 'border-black-200'} border-2 w-full h-16 px-4 rounded-2xl focus:border-secondary items-center flex-row ${otherStyles}`}
      >
        <View className="flex-1 justify-center">
          <TextInput
            className="text-white text-2xl font-ibrand"
            keyboardType={keyboardType}
            style={{ lineHeight: 25 }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={secureTextEntry}
            ref={ref}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
        </View>

        {annotation && (
          <Text className="text-xl text-gray-400 font-ibrand">
            {annotation}
          </Text>
        )}
      </View>
    </View>
  );
};

export default FormField;
