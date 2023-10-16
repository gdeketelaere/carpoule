import { Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../logo/logo';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/navigation';
import * as Icon from 'react-native-feather';

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <View className="pt-2 px-8 flex flex-row items-center w-full justify-between">
      <Logo />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          {user && (
            <View className="h-10 w-10 bg-mint-100 rounded-full">
              <Text>{user?.email}</Text>
            </View>
          )}
          {user === null && (
            <View className="h-10 w-10 bg-mint-100 rounded-full flex items-center justify-center">
              <Icon.User
                width={21}
                height={21}
                className="text-mint-500 relative top-1"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
