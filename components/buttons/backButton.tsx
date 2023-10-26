import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const BackButton = ({
  children,
  toHome
}: {
  children: ReactNode;
  toHome?: Boolean;
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      onPress={() =>
        toHome ? navigation.navigate('Home') : navigation.goBack()
      }
    >
      <View className="flex flex-row gap-2 items-center">
        <ArrowLeft
          width={32}
          height={32}
          className="text-mint-900 relative top-1"
        />
        <Text className="font-Comfortaa_300Light uppercase pt-4 text-3xl text-mint-900">
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
