import { Text, View } from 'react-native';
import { BackButton } from '../components/buttons/backButton';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PouleDetailsType } from '../App';

export const PouleDetails = () => {
  const route = useRoute<RouteProp<PouleDetailsType, 'params'>>();
  const { item } = route.params;
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <BackButton>Retour à la liste</BackButton>
        {item && (
          <View className="bg-white rounded-lg py-6 px-4 mt-4">
            <Text className="text-gray-500">
              {item.dateStart} {item.timeStart}
            </Text>
            <Text className="font-Inter_600SemiBold text-lg leading-5">
              {item.name}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
