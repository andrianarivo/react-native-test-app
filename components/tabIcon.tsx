import React from 'react';
import {Icon, Text} from '@rneui/themed';
import {View} from 'react-native';

interface TabIconProps {
  focused: boolean;
  iconName: string;
  label: string;
}

export default function TabIcon({focused, iconName, label}: TabIconProps) {
  return (
    <View>
      <Icon name={iconName} color={focused ? '#e32f45' : '#748c94'} />
      <Text
        style={
          // eslint-disable-next-line react-native/no-inline-styles
          {
            color: focused ? '#e32f45' : '#748c94',
            fontSize: 12,
          }
        }>
        {label}
      </Text>
    </View>
  );
}
