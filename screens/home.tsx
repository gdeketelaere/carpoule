import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '../components/layout/screenWrapper';
import { PrimaryButton } from '../components/buttons/primaryButton';
import { Plus } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../components/navigation/navigation';

export const Home = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <ScreenWrapper noPadding>
      <ImageBackground
        source={require('../assets/home-bg.png')}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="px-4">
          <Text className="font-Comfortaa_300Light uppercase pt-4 text-4xl text-mint-900">
            Êtes-vous prêt à carpouler?
          </Text>
          <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
            Organisez vos covoiturages simplement avec vos proches, voisins ou
            membres de votre club sportif.
          </Text>
          <TouchableOpacity
            className="mt-4"
            onPress={() => navigation.navigate('CreateEvent')}
          >
            <PrimaryButton
              icon={<Plus width={24} height={24} stroke="#FFFFFF" />}
            >
              Creer un Carpoule
            </PrimaryButton>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};
