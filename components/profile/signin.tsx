import { signInWithEmailAndPassword } from 'firebase/auth';
import { styled } from 'nativewind';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { PrimaryButton } from '../buttons/primaryButton';
import { SecondaryButton } from '../buttons/secondaryButton';
import { carPouleUser } from '../../screens/login';
import PouleSignIn from '../../assets/poule-signin.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { X } from 'react-native-feather';

export const Signin = ({
  carPouleUser,
  setCarPouleUser,
  setSignInScreen
}: {
  carPouleUser: carPouleUser;
  setCarPouleUser: (value: React.SetStateAction<carPouleUser>) => void;
  setSignInScreen: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const signIn = async () => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        carPouleUser.email,
        carPouleUser.password
      );
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      alert('Sign In failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };
  const StyledView = styled(View);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View className="relative h-full">
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={20}
        className="bg-white rounded-2xl flex-1 mb-[96px] mt-4 p-4 h-full overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <View className="mx-auto mt-4">
          <PouleSignIn width={230} height={280} />
        </View>

        <View className="w-full h-full relative px-4">
          <View className="pt-8 flex flex-col gap-4">
            <TextInput
              className=" border-black border-b p-2 text-xl font-Inter_300Light"
              value={carPouleUser.email}
              placeholder="email"
              autoCapitalize="none"
              onChangeText={(text) =>
                setCarPouleUser({ ...carPouleUser, email: text })
              }
            ></TextInput>
            <TextInput
              className="border-black border-b p-2 font-Inter_300Light text-xl"
              value={carPouleUser.password}
              secureTextEntry={true}
              placeholder="password"
              onChangeText={(text) =>
                setCarPouleUser({ ...carPouleUser, password: text })
              }
            ></TextInput>

            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
                <StyledView className="flex flex-col gap-y-4 mt-2 w-full ml-2">
                  <TouchableOpacity onPress={signIn}>
                    <PrimaryButton>Connexion</PrimaryButton>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSignInScreen(false)}>
                    <SecondaryButton>Nouveau compte</SecondaryButton>
                  </TouchableOpacity>
                </StyledView>
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="absolute right-2 top-6"
        style={{ zIndex: 99, elevation: 99 }}
      >
        <View>
          <X width={32} height={32} className="text-mint-900 relative top-1" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
