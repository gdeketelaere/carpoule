import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../FirebaseConfig';

import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { styled } from 'nativewind';
import { BackButton } from '../components/buttons/backButton';
import { StackNavigation } from '../components/navigation/navigation';
import { PrimaryButton } from '../components/buttons/primaryButton';
import { SecondaryButton } from '../components/buttons/secondaryButton';
import { ScreenWrapper } from '../components/layout/screenWrapper';
import { doc, setDoc } from 'firebase/firestore';

const addUserToFirestore = async (
  uid: string,
  email: string,
  username: string
) => {
  const usersCollection = doc(FIRESTORE_DB, 'users', uid);
  await setDoc(
    usersCollection,
    {
      username: username,
      email: email,
      firstname: 'gilles',
      lastname: 'Deketelaere'
    },
    { merge: true }
  );
  /* Function addDoc() is, to adding new documents with auto generated ID */
  /* Function setDoc() will create a new file if it not exists and update if it has option merge to true.*/
  /*await addDoc(usersCollection, {
    username: username,
    email: email,
    firstname: 'gilles',
    lastname: 'Deketelaere'
  });*/
};

export const Login = ({ navigation }: { navigation: StackNavigation }) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState(user?.email || '');
  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setUser(response.user);
      navigation.navigate('Home');
    } catch (error: any) {
      console.log(error);
      alert('Sign In failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        setUser(response.user);
        addUserToFirestore(response.user.uid, email, 'Gillette');
      }
    } catch (error: any) {
      console.log(error);
      alert('Sign Up failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      auth.signOut();
      setUser(null);
    } catch (error: any) {
      console.log(error);
      alert('Sign In failed:' + error.message);
    } finally {
      setLoading(false);
    }
  };
  const StyledView = styled(View);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);
  return (
    <ScreenWrapper>
      <BackButton toHome={true}>Login</BackButton>
      <View className="text-grey-800">
        {user && (
          <>
            <Text className="text-center mt-6 font-Inter_500Medium">
              Vous êtes actuellement connecté
            </Text>
            <Text className="text-center font-Inter_300Light">
              {user.email}
            </Text>
          </>
        )}
        {user === null && (
          <Text className="text-center mt-6 font-Inter_500Medium">
            Veuillez vous connecter ci-dessous
          </Text>
        )}
      </View>

      <KeyboardAvoidingView behavior="padding">
        <View className="w-full h-full relative px-4">
          <View className="pt-8 flex flex-col gap-4">
            {user === null && (
              <>
                <TextInput
                  className=" border-black border-b p-2 text-xl font-Inter_300Light"
                  value={email}
                  placeholder="email"
                  autoCapitalize="none"
                  onChangeText={(text) => setEmail(text)}
                ></TextInput>
                <TextInput
                  className="border-black border-b p-2 font-Inter_300Light text-xl"
                  value={password}
                  secureTextEntry={true}
                  placeholder="password"
                  onChangeText={(text) => setPassword(text)}
                ></TextInput>
              </>
            )}
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
                {user === null && (
                  <StyledView className="flex flex-col gap-y-4 mt-2">
                    <TouchableOpacity onPress={signIn}>
                      <PrimaryButton>Connexion</PrimaryButton>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signUp}>
                      <SecondaryButton>Créer un compte</SecondaryButton>
                    </TouchableOpacity>
                  </StyledView>
                )}
              </>
            )}
          </View>
          {user && (
            <TouchableOpacity
              onPress={signOut}
              className="absolute bottom-56 w-full"
            >
              <SecondaryButton>Déconnexion</SecondaryButton>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};
