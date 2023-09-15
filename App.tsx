import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Logo } from './components/logo/logo';
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

export default function App() {
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
    <View className="bg-mint-500 flex-1 px-8">
      <View className="pt-16">
        <Logo />
      </View>
      <Text className="font-Comfortaa_300Light uppercase pt-4 rounded-2xl text-4xl text-mint-900">
        Êtes-vous prêt à carpouler?
      </Text>
      <Text className="text-xl font-Inter_400Regular text-grey-800">
        Organisez vos covoiturages simplement avec vos proches, voisins ou
        membres de votre club sportif.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
