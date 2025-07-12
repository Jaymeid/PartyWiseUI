import { useEffect } from 'react';

import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const userIsLoggedIn = false;

    if (userIsLoggedIn) {
      router.replace('/(tabs)');
    } else {
      router.replace('/(auth)/SignIn');
    }
  }, []);

  return null;
}
