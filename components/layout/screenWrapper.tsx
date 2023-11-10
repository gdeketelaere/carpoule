import classNames from 'classnames';
import { ReactNode } from 'react';
import { View } from 'react-native';

export const ScreenWrapper = ({
  children,
  noPadding
}: {
  children: ReactNode;
  noPadding?: boolean;
}) => {
  return (
    <View className="bg-mint-500 flex-1 h-full">
      <View className={classNames('px-4 h-full', noPadding ? 'px-0' : 'px-4')}>
        {children}
      </View>
    </View>
  );
};
