import { ReactNode } from 'react';
import { Text, View } from 'react-native';

export const SecondaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <View className="border border-gray-800 rounded-full px-6 py-4">
      <Text className="text-grey-800  font-Inter_700Bold text-base uppercase text-center">
        {children}
      </Text>
    </View>
  );
};
