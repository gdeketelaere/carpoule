import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { BackButton } from '../components/buttons/backButton';

export const About = ({
  navigation
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) => {
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <BackButton>A propos</BackButton>
        <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
          Organisez vos covoiturages simplement avec vos proches, voisins ou
          membres de votre club sportif.
        </Text>
      </View>
    </View>
  );
};
