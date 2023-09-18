import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';
import { ArrowLeft } from 'react-native-feather';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { styled } from 'nativewind';

export const Login = ({
  navigation
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user);
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
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-8">
        <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
          <View className="flex flex-row gap-2 items-center">
            <ArrowLeft
              width={32}
              height={32}
              className="text-mint-900 relative top-1"
            />
            <Text className="font-Comfortaa_300Light uppercase pt-4 text-3xl text-mint-900">
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="padding">
          <View className="pt-8 flex flex-col gap-4">
            <TextInput
              className="bg-white border-black border px-4 py-2 font-Inter_500Medium text-xl"
              value={email}
              placeholder="email"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              className="bg-white border-black border px-4 py-2 font-Inter_500Medium text-xl"
              value={password}
              secureTextEntry={true}
              placeholder="password"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <StyledView className="flex flex-col gap-4">
                <Button title="login" onPress={signIn}></Button>
                <Button title="Create account" onPress={signUp}></Button>
                <Button title="Log out" onPress={signOut}></Button>
              </StyledView>
            )}
          </View>
          <View>
            {user && <Text>user {user.email} is connected</Text>}
            {user === null && <Text>user not connected</Text>}
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
