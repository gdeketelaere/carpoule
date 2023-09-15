import { Text, View } from 'react-native';
import { Logo } from '../components/logo/logo';

export const Home = () => {
  return (
    <View className="pt-16 px-8">
      <Logo />
      <Text className="font-Comfortaa_300Light uppercase pt-4 rounded-2xl text-4xl text-mint-900">
        Êtes-vous prêt à carpouler?
      </Text>
      <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
        Organisez vos covoiturages simplement avec vos proches, voisins ou
        membres de votre club sportif.
      </Text>
    </View>
  );
};
