import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';
import StoryItem from './components/UserStory/StoryItem';

const usesStories = [
  {
    id: 1,
    username: 'zs',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 2,
    username: 'ls',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 3,
    username: 'ww',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 4,
    username: 'zl',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 5,
    username: 'zq',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 6,
    username: 'dg',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 7,
    username: 'ce',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 8,
    username: 'alex',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 9,
    username: 'ms',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 10,
    username: 'dn',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
  {
    id: 11,
    username: 'dg',
    profileImageUrl: require('./assets/images/default_profile.png'),
  },
];
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
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={usesStories}
          renderItem={({ item }) => (
            <StoryItem
              firstName={item.username}
              profileImage={item.profileImageUrl}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
