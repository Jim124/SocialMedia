import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <Title title={`Let's Explore`} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: { fontFamily: getFontFamily('inter', '300'), fontSize: 50 },
});
