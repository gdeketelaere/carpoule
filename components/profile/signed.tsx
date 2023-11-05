import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { User } from 'firebase/auth';
import { useUserData } from '../../hooks/useUserData';
import { BackButton } from '../buttons/backButton';

export const Signed = () => {
  const { userData, loading } = useUserData();
  return (
    <View>
      <BackButton toHome={true}>Profile</BackButton>
      <View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View>
            <Text className="text-lg font-Inter_600SemiBold mt-8">
              {userData?.firstname} {userData?.lastname}
            </Text>
            <Text>{userData?.email}</Text>
            {/* Add more user data fields here if needed */}
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          FIREBASE_AUTH.signOut();
        }}
      >
        <Text className="w-full text-center underline mt-16">Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};
