import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import baseStyles from '../styles';

export interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: any;
}
export default function CustomTabBarButton({
  children,
  onPress,
}: CustomTabBarButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={{
        ...styles.customTabBarButton,
        ...baseStyles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          ...styles.customTabBarButtonContainer,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customTabBarButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTabBarButtonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e32f45',
  },
});
