import classNames from 'classnames';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

export const PrimaryButton = ({
  children,
  icon
}: {
  children: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <View
      className={classNames('bg-red-500 rounded-full px-6 py-4', {
        'flex flex-row items-end justify-between': icon
      })}
    >
      <Text className="text-white font-Inter_700Bold text-base uppercase text-center">
        {children}
      </Text>
      {icon && <Text>{icon}</Text>}
    </View>
  );
};
