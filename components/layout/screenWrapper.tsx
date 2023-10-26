import { ReactNode } from 'react';
import { View } from 'react-native';

export const ScreenWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View className="bg-mint-500 flex-1 h-full">
      <View className="px-4 h-full">{children}</View>
    </View>
  );
};
