import React from 'react';

import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Accordion from '@/components/Accordion';
import Hr from '@/components/Hr';
import Achievement from '@/components/profileScreen/Achievement';
import ChangePassword from '@/components/profileScreen/ChangePassword';
import ChangeUsername from '@/components/profileScreen/ChangeUsername';
import ProfileHeader from '@/components/profileScreen/ProfileHeader';
import ProfileOption from '@/components/profileScreen/ProfileOption';

export default function ProfileTabScreen() {
  return (
    <SafeAreaView className="flex-1 h-full bg-background">
      <View className="ml-5">
        <ProfileHeader
          username="username"
          followerCount={100}
          followingCount={50}
        />
      </View>
      <View className="mt-5">
        <ProfileOption label="Email" supportiveText="account@mail.com" />
        <Hr />
        <ChangeUsername />
        <Hr />
        <ChangePassword />
        <Hr />
      </View>
      <View className="mt-10">
        <Accordion label="Achievements" isDefaultOpen>
          <View className="flex-row justify-between w-full mt-2">
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked
            />
          </View>
        </Accordion>
        <Accordion label="Locked Achievements" isDefaultOpen={false}>
          <View className="flex-row justify-between w-full mt-2 opacity-50">
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked={false}
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked={false}
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked={false}
            />
            <Achievement
              title={'Sober for 50 days'}
              dateAchieved={new Date()}
              unlocked={false}
            />
          </View>
        </Accordion>
      </View>
    </SafeAreaView>
  );
}
