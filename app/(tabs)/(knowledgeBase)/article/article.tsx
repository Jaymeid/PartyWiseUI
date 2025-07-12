import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import Markdown from '@ronradtke/react-native-markdown-display';
import { router } from 'expo-router';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { exampleArticle } from '@/content/exampleArticle';

export default function ArticleScreen() {
  return (
    <SafeAreaView className="bg-background">
      <View className="px-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={24} color="white" />
        </TouchableOpacity>
        <View className="mt-2 pb-10">
          <ScrollView>
            <Markdown
              style={{
                body: { fontFamily: 'ibrand', color: 'white' },
                hr: { backgroundColor: 'white' },
              }}
            >
              {exampleArticle}
            </Markdown>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
