import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { BackButton } from '../components/buttons/backButton';
import { useState } from 'react';
import { User, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { styled } from 'nativewind';
import { SecondaryButton } from '../components/buttons/secondaryButton';

export const SignUp = () => {
  const auth = FIREBASE_AUTH;
  const StyledView = styled(View);
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
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
  return (
    <View className="bg-mint-500 flex-1 h-full">
      <View className="px-8 h-full">
        <BackButton>SignUp</BackButton>
        <KeyboardAvoidingView behavior="padding">
          <View className="w-full h-full relative">
            <View className="pt-8 flex flex-col gap-4">
              <TextInput
                className="border-black border-b p-2 font-Inter_300Light text-xl"
                value={username}
                placeholder="Nom d'utilisateur"
                onChangeText={(text) => setUsername(text)}
              ></TextInput>
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

              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <>
                  {user === null && (
                    <StyledView className="flex flex-col gap-y-4 mt-2">
                      <TouchableOpacity onPress={signUp}>
                        <SecondaryButton>Créer un compte</SecondaryButton>
                      </TouchableOpacity>
                    </StyledView>
                  )}
                </>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
