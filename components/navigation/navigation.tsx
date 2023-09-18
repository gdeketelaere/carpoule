import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export const Navigation = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-4 w-full left-0 px-4">
      <View className="w-full bg-mint-900 px-8 py-4 rounded-full flex flex-row justify-between">
        <TouchableOpacity onPress={() => navigation.navigate('About' as never)}>
          <Text className="text-white font-Inter_700Bold text-base">
            A propos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
          <Text className="text-white font-Inter_700Bold text-base">
            Vos carpoules
          </Text>
        </TouchableOpacity>
      </View>
      <View className="absolute left-1/2 -ml-[22] -top-3 w-[56] h-[56] bg-red-500 rounded-full flex flex-row items-center justify-center ">
        <Text className="text-white text-5xl font-Comfortaa_300Light mt-2">
          +
        </Text>
      </View>
    </View>
  );
};
