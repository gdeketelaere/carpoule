import { Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../logo/logo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/navigation';
import * as Icon from 'react-native-feather';
import { useUserData } from '../../hooks/useUserData';

const capitalizeFirstLetter = (str?: string) => {
  return str?.charAt(0).toUpperCase();
};

export const Header = () => {
  const navigation = useNavigation<StackNavigation>();
  const { userData } = useUserData();

  return (
    <View className="pt-12 px-4 flex flex-row items-center w-full justify-between">
      <Logo />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          {userData ? (
            <View className="h-10 w-10 rounded-full flex items-center justify-center bg-mint-900">
              <Text className="text-mint-100 text-base uppercase">
                {`${capitalizeFirstLetter(
                  userData?.firstname
                )}${capitalizeFirstLetter(userData?.lastname)}`}
              </Text>
            </View>
          ) : (
            <View className="h-10 w-10 bg-mint-100  rounded-full flex items-center justify-center">
              <Icon.User
                width={21}
                height={21}
                stroke="#9BE1CF"
                className="relative top-1"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
