import { ReactNode } from 'react';
import { Text, View } from 'react-native';

export const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <View className="bg-red-500 rounded-full px-6 py-4">
      <Text className=" text-white font-Inter_700Bold text-base uppercase text-center">
        {children}
      </Text>
    </View>
  );
};
