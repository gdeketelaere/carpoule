import { Text, View } from 'react-native';
import { Logo } from '../components/logo/logo';

export const Home = () => {
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <Text className="font-Comfortaa_300Light uppercase pt-4 text-4xl text-mint-900">
          Êtes-vous prêt à carpouler?
        </Text>
        <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
          Organisez vos covoiturages simplement avec vos proches, voisins ou
          membres de votre club sportif.
        </Text>
      </View>
    </View>
  );
};
