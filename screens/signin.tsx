import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { styled } from 'nativewind';
import { BackButton } from '../components/buttons/backButton';
import { StackNavigation } from '../components/navigation/navigation';

export const SignIn = ({ navigation }: { navigation: StackNavigation }) => {
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
      setUser(response.user);
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
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <BackButton>Login</BackButton>
        <View className="mt-2 text-grey-800">
          {user && (
            <Text className="text-center ">user {user.email} is connected</Text>
          )}
          {user === null && (
            <Text className="text-center ">user not connected</Text>
          )}
        </View>
        <KeyboardAvoidingView behavior="padding">
          <View className="pt-8 flex flex-col gap-4">
            {user === null && (
              <>
                <TextInput
                  className=" border-black border-b p-2 font-Inter_500Medium text-xl"
                  value={email}
                  placeholder="email"
                  autoCapitalize="none"
                  onChangeText={(text) => setEmail(text)}
                ></TextInput>
                <TextInput
                  className="border-black border-b p-2 font-Inter_500Medium text-xl"
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
                      <Text className="bg-red-500 rounded-full text-white px-6 py-4 font-Inter_700Bold text-base uppercase text-center">
                        Connexion
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={signUp}>
                      <Text className="bg-white border border-gray-800 rounded-full text-grey-800 px-6 py-4 font-Inter_700Bold text-base uppercase text-center">
                        Créer un compte
                      </Text>
                    </TouchableOpacity>
                  </StyledView>
                )}
                {user && (
                  <TouchableOpacity onPress={signOut}>
                    <Text className="text-center text-base text-grey-800 underline">
                      Déconnexion
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
