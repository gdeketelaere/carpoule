import { ReactNode } from 'react';
import { Platform, StatusBar, View } from 'react-native';

export const ScreenWrapper = ({ children }: { children: ReactNode }) => {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === 'ios'
    ? 30
    : 0;
  return (
    <View style={{ paddingTop: statusBarHeight, flex: 1 }}>{children}</View>
  );
};
