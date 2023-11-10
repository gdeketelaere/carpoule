import { View } from 'react-native';
import { BackButton } from '../components/buttons/backButton';

export const CreateEvent = () => {
  return (
    <View className="bg-mint-500 flex-1 ">
      <View className="px-4">
        <BackButton>{''}</BackButton>
      </View>
    </View>
  );
};
