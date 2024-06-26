import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import { StatusBar } from 'expo-status-bar';
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
    <>
      <StatusBar style='dark' />
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={globalStyle.header}>
            <Title title={`Let's Explore`} />
            <TouchableOpacity style={globalStyle.messageIcon}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: '#898DAE' }}
                size={20}
              />
              <View style={globalStyle.messageNumberContainer}>
                <Text style={globalStyle.messageNumber}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Users />
          <Posts />
        </View>
      </SafeAreaView>
    </>
  );
}
