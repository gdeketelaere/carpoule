import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold
} from '@expo-google-fonts/comfortaa';
import { Navigation } from './components/navigation/navigation';
import { Home } from './screens/home';
import { About } from './screens/about';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { SignIn } from './screens/signin';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { ScreenWrapper } from './components/layout/screenWrapper';
import { ItemType, PoulesList } from './screens/poulesList';
import { PouleDetails } from './screens/pouleDetails';
import { Header } from './components/header/header';

export type PouleDetailsType = {
  params: {
    item?: ItemType | undefined;
  };
};

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  SignIn: undefined;
  PouleList: undefined;
  PouleDetails: { item?: ItemType | undefined };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold
  });
  if (!fontsLoaded) return null;

  return (
    <ScreenWrapper>
      <NavigationContainer>
        <View className="bg-mint-500 flex-1 ">
          <Header />
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PouleList"
              component={PoulesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PouleDetails"
              component={PouleDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </ScreenWrapper>
  );
}
