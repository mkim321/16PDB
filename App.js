import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';

import OnboardingScreen from './screens/OnboardingScreen';
import OnboardingTwoScreen from './screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './screens/OnboardingThreeScreen';
import HomeScreen from './screens/HomeScreen';
import AnalystScreen from './screens/AnalystScreen';
import DiplomatScreen from './screens/DiplomatScreen';
import SentinelScreen  from './screens/SentinelScreen';
import ExplorerScreen from './screens/ExplorerScreen';
import DetailScreen from './screens/TypeDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });

  // conditional to show a spinner while the font is loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#b9c8ff' />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Onboarding" 
          screenOptions={{
            headerTitleStyle: {
              fontWeight: 'normal',
              fontFamily: 'Montserrat_500Medium',
            }
          }}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingTwo"
            component={OnboardingTwoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingThree"
            component={OnboardingThreeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Analyst"
            component={AnalystScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Diplomat"
            component={DiplomatScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Sentinel"
            component={SentinelScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Explorer"
            component={ExplorerScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

});
