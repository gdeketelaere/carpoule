import { Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../logo/logo';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/navigation';
import * as Icon from 'react-native-feather';
import classNames from 'classnames';

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <View className="pt-2 px-4 flex flex-row items-center w-full justify-between">
      <Logo />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          {user && (
            <View
              className={classNames(
                'h-10 w-10 bg-mint-100 rounded-full flex items-center justify-center',
                user?.email ? 'bg-mint-900' : 'bg-mint-100 '
              )}
            >
              <Text className="text-mint-100 text-base">GD</Text>
            </View>
          )}
          {user === null && (
            <View className="h-10 w-10 bg-mint-100 rounded-full flex items-center justify-center">
              <Icon.User
                width={21}
                height={21}
                className=" fill-mint-900 relative top-1"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
