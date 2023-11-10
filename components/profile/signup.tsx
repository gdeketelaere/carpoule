import { doc, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../FirebaseConfig';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { styled } from 'nativewind';
import { SecondaryButton } from '../buttons/secondaryButton';
import { carPouleUser } from '../../screens/login';
import PouleSignUp from '../../assets/poule-signup.svg';
import { X, Eye, EyeOff } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const addUserToFirestore = async (carPouleUser: carPouleUser) => {
  const usersCollection = doc(FIRESTORE_DB, 'users', carPouleUser.id);
  try {
    const newUser = await setDoc(
      usersCollection,
      {
        username: carPouleUser.username,
        email: carPouleUser.email,
        firstname: carPouleUser.firstname,
        lastname: carPouleUser.lastname
      },
      { merge: true }
    );
    return newUser;
  } catch (error: any) {
    alert('User in DB failed:' + error.message);
  }
  /*await addDoc(usersCollection, {
    username: username,
    email: email,
    firstname: 'gilles',
    lastname: 'Deketelaere'
  });*/
  /* Function addDoc() is, to adding new documents with auto generated ID */
  /* Function setDoc() will create a new file if it not exists and update if it has option merge to true.*/
};

export const Signup = ({
  carPouleUser,
  setCarPouleUser,
  setSignInScreen
}: {
  carPouleUser: carPouleUser;
  setCarPouleUser: (value: React.SetStateAction<carPouleUser>) => void;
  setSignInScreen: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const StyledView = styled(View);
  const signUp = async (carPouleUser: carPouleUser) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        carPouleUser.email,
        carPouleUser?.password
      );
      if (response.user) {
        const newUser = {
          ...carPouleUser,
          id: response.user.uid
        };

        setCarPouleUser(newUser);
        addUserToFirestore(newUser);
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign Up failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };
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
        <View className="mx-auto -mt-4">
          <PouleSignUp width={230} height={250} />
        </View>

        <View className="w-full h-full relative px-4">
          <View className="pt-8 flex flex-col gap-4">
            <TextInput
              className=" border-black border-b p-2 text-xl font-Inter_300Light"
              value={carPouleUser.firstname}
              placeholder="Prénom"
              autoCapitalize="none"
              onChangeText={(text) =>
                setCarPouleUser({ ...carPouleUser, firstname: text })
              }
            ></TextInput>
            <TextInput
              className=" border-black border-b p-2 text-xl font-Inter_300Light"
              value={carPouleUser.lastname}
              placeholder="Nom"
              autoCapitalize="none"
              onChangeText={(text) =>
                setCarPouleUser({ ...carPouleUser, lastname: text })
              }
            ></TextInput>
            <TextInput
              className=" border-black border-b p-2 text-xl font-Inter_300Light"
              value={carPouleUser.email}
              placeholder="email"
              autoCapitalize="none"
              onChangeText={(text) =>
                setCarPouleUser({ ...carPouleUser, email: text })
              }
            ></TextInput>
            <View className="relative">
              <TextInput
                className="border-black border-b p-2 font-Inter_300Light text-xl"
                value={carPouleUser.password}
                secureTextEntry={!showPassword}
                placeholder="password"
                onChangeText={(text) =>
                  setCarPouleUser({ ...carPouleUser, password: text })
                }
              ></TextInput>
              {showPassword ? (
                <EyeOff
                  width={21}
                  height={21}
                  stroke="#3C3C50"
                  className="absolute right-1 top-4"
                  onPress={toggleShowPassword}
                />
              ) : (
                <Eye
                  width={21}
                  height={21}
                  stroke="#3C3C50"
                  className="absolute right-1 top-4"
                  onPress={toggleShowPassword}
                />
              )}
            </View>

            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
                <StyledView className="flex flex-col gap-y-4 mt-2 w-full ml-2">
                  <TouchableOpacity onPress={() => signUp(carPouleUser)}>
                    <SecondaryButton>Créer un compte</SecondaryButton>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSignInScreen(true)}>
                    <Text className="w-full text-center underline">
                      Retour à l’écran de connexion
                    </Text>
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
