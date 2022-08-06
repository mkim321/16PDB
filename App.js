import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import OnboardingTwoScreen from './screens/OnboardingTwoScreen';
import OnboardingThreeScreen from './screens/OnboardingThreeScreen';
// import TypeScreen from './screens/TypeScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
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
            options={{ headerShown: false }}
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
