import { Text, TouchableOpacity, View } from 'react-native';
import { ItemType } from '../../screens/poulesList';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/navigation';

export const PouleCard = ({ item }: { item: ItemType }) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PouleDetails', {
          item: item
        })
      }
    >
      <View className="bg-white rounded-lg py-6 px-4 mt-4">
        <Text className="text-gray-500">
          {item.dateStart} {item.timeStart}
        </Text>
        <Text className="font-Inter_600SemiBold text-lg leading-5">
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
