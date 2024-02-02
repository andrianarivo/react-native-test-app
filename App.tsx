/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import CameraScreen from './screens/camera';
import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';
import TabIcon from './components/tabIcon';
import baseStyles from './styles';
import CustomTabBarButton from './components/customTabBarButton';
import {StyleSheet} from 'react-native';

const BottomTab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.tabBar,
            ...baseStyles.shadow,
          },
        })}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} iconName="home" label="Home" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarIcon: () => <Icon name="camera" color="white" size={30} />,
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} iconName="settings" label="Settings" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 90,
  },
});

export default App;
