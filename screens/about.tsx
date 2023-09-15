import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { NavigationProp } from '@react-navigation/native';

export const About = ({
  navigation
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) => {
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
          <View className="flex flex-row gap-2 items-center">
            <ArrowLeft
              width={32}
              height={32}
              className="text-mint-900 relative top-1"
            />
            <Text className="font-Comfortaa_300Light uppercase pt-4 text-3xl text-mint-900">
              Vos carpoules
            </Text>
          </View>
        </TouchableOpacity>
        <Text className="text-xl font-Inter_400Regular text-grey-800 mt-4">
          Organisez vos covoiturages simplement avec vos proches, voisins ou
          membres de votre club sportif.
        </Text>
      </View>
    </View>
  );
};
