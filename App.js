import { SafeAreaView, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';

import { Text as RNText } from 'react-native';
RNText.defaultProps = RNText.defaultProps || {};
RNText.defaultProps.style = { fontFamily: 'Handjet-Regular' };

export default function App() {
  const [fontsLoaded] = useFonts({
    'Handjet-Regular': require('./assets/fonts/Handjet-Regular.ttf'),
    'Handjet-SemiBold': require('./assets/fonts/Handjet-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
