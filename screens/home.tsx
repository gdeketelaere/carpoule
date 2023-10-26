import { Text } from 'react-native';
import { ScreenWrapper } from '../components/layout/screenWrapper';

export const Home = () => {
  return (
    <ScreenWrapper>
      <Text className="font-Comfortaa_300Light uppercase pt-4 text-4xl text-mint-900">
        Êtes-vous prêt à carpouler?
      </Text>
      <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
        Organisez vos covoiturages simplement avec vos proches, voisins ou
        membres de votre club sportif.
      </Text>
    </ScreenWrapper>
  );
};
